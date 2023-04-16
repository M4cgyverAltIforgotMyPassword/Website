"use client";

import styles from '@/components/website/overlay.module.css';
import { useState } from 'react';

export default function Overlay({ children }: { children?: React.ReactNode }) {
  const [showOverlay, setOverlay] = useState(true); 
 
  return (
    <div className={`${styles.overlay} ${showOverlay ? '' : styles.hidden}`}>
      <span className={styles.alert}>Heads up!</span>
      {children}
      <button className={styles.confirm} onClick={() => {setOverlay(false)}}>I Understand!</button>
    </div>
  );
}
