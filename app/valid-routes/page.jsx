// pages/route-checker.js
"use client";
import { useState } from "react";

const RouteChecker = () => {
  const [routes, setRoutes] = useState([
    "/",
    "/about",
    "/posts/1",
    "/non-existent-route",
  ]);
  const [results, setResults] = useState([]);

  const checkRoutes = async () => {
    const checks = await Promise.all(
      routes.map(async (route) => {
        const res = await fetch(route);
        return {
          route,
          status: res.status,
        };
      })
    );
    setResults(checks);
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Route Checker</h1>
      <button
        onClick={checkRoutes}
        className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg"
      >
        Check Routes
      </button>
      <ul className="mt-8">
        {results.map(({ route, status }) => (
          <li key={route} className="mb-2">
            <span className="font-medium">{route}</span> -{" "}
            <span>{status === 200 ? "Exists" : "Not Exists"}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default RouteChecker;
