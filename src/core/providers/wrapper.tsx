"use client";

import React, { Suspense } from "react";

import StoreProvider from "@/store/provider";
import { AppProgressBar } from "next-nprogress-bar";
import { ChildrenType } from "../interface/children.interface";
import ToastProvider from "./toast.provider";

export default function ProvidersWrapper({ children }: ChildrenType) {
  return (
    <StoreProvider>
      <ToastProvider>
        {children}
        <Suspense>
          <AppProgressBar
            height="2px"
            color="red"
            options={{ showSpinner: false }}
            shallowRouting
          />
        </Suspense>
      </ToastProvider>
    </StoreProvider>
  );
}
