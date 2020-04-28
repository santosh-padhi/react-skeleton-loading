import React from 'react'
import {SkeletonPulse,SkeletonBar} from "./LoadingSkeletonStyle";

export const Skeleton = (props) => (
    <SkeletonPulse {...props} />
  );

export { SkeletonBar }