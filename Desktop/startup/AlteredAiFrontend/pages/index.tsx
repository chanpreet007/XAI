'use client'
import * as React from "react";
import HomeLandingPage from "./HomeLandingPage";
import { Suspense } from 'react';

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeLandingPage />;
    </Suspense>
  );
}
