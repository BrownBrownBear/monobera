"use client";

import { useEffect, useState } from "react";
import {
  Spinner,
} from "@bera/shared-ui";
import {
  EventType,
  Fit,
  Layout,
  useRive,
  useStateMachineInput,
} from "@rive-app/react-canvas";

export function RocketAnimation() {
  const { RiveComponent, rive } = useRive({
    src: "/berps_rocket.riv",
    stateMachines: "State Machine",
    autoplay: true,
    layout: new Layout({ fit: Fit.Contain }),
  });

  useEffect(() => {
    if (rive) rive.play();
  }, [rive]);

  return (
    <>
        <div className="z-0 mt-[400px] absolute opacity-60 h-[500px] w-[500px]">
          <RiveComponent />
        </div>
    </>
  );
}
