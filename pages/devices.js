import React, { useEffect, useState } from "react";
import Head from "next/head";
import { StickyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CommunitySection } from "../components/CommunitySection";
import Papa from 'papaparse';
import Fuse from 'fuse.js';

export default function Devices() {
  const [devices, setDevices] = useState([]);
  const [filteredDevices, setFilteredDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [fuse, setFuse] = useState(null);

  useEffect(() => {
    fetch('/devices.csv')
      .then(response => response.text())
      .then(csv => {
        const results = Papa.parse(csv, {
          header: true,
          skipEmptyLines: true
        });
        
        // Filter and transform the data to show only relevant columns
        const filteredData = results.data.map(device => ({
          manufacturer: device.Brand || device.Manufacturer,
          model: device["Model Name"] || device.Device,
          device: device.Device,
          soc: device["System on Chip"],
          ram: device["RAM (TotalMem)"],
          android: device["Android SDK Versions"]
        }));

        setDevices(filteredData);
        setFilteredDevices(filteredData);
        
        // Add a combined search field and initialize Fuse instance
        const dataWithCombined = filteredData.map(device => ({
          ...device,
          combined: `${device.manufacturer} ${device.model}`
        }));
        
        const fuseInstance = new Fuse(dataWithCombined, {
          keys: ['manufacturer', 'model', 'combined'],
          threshold: 0.4,
          includeScore: true,
          useExtendedSearch: true,
          minMatchCharLength: 2
        });
        setFuse(fuseInstance);
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to load device compatibility data");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Head>
        <title>Compatible Devices - MRT Buddy</title>
        <meta 
          name="description" 
          content="Check if your device is compatible with MRT Buddy. View the list of supported Android devices with NFC capabilities." 
        />
      </Head>
      <StickyNavbar />
      <CommunitySection />

      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 dark:text-white">
            Compatible Devices
          </h1>
          
          <div className="mb-6 space-y-4">
            <input
              type="text"
              placeholder="Search Android devices (e.g., Xiaomi Redmi 10)"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => {
                const query = e.target.value;
                setSearchQuery(query);
                
                if (!query.trim()) {
                  setFilteredDevices(showAll ? devices : devices.slice(0, 100));
                  return;
                }
                
                if (fuse) {
                  const results = fuse.search(query);
                  const matchedDevices = results.map(result => result.item);
                  setFilteredDevices(showAll ? matchedDevices : matchedDevices.slice(0, 100));
                }
              }}
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                id="showAll"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                checked={showAll}
                onChange={(e) => setShowAll(e.target.checked)}
              />
              <label htmlFor="showAll" className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                Show all matching devices (instead of top 100)
              </label>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h2 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">iPhone Compatibility</h2>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                All iPhone models from iPhone 7 and newer are compatible with MRT Buddy.
              </p>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h2 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Android Compatibility</h2>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                This list shows Android devices that have been tested with MRT Buddy. Any Android device with NFC capabilities should work, even if not listed here.
              </p>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-8 dark:text-white">
              Loading device compatibility data...
            </div>
          ) : error ? (
            <div className="text-center py-8 text-red-600 dark:text-red-400">
              {error}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Manufacturer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Model
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Device
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      System on Chip
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      RAM
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Android Version
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                  {filteredDevices.map((device, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                        {device.manufacturer}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                        {device.model}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                        {device.device}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                        {device.soc}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                        {device.ram}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                        {device.android}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
