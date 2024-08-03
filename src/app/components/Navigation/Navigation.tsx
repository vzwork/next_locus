"use client";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import styles from "./Navigation.module.css";
import { useTheme } from "@mui/material";
import { ButtonChannel } from "../ButtonChannel/ButtonChannel";

export default function Navigation() {
  const theme = useTheme();

  return (
    <div className='flex gap-x-1'>
      <div className={styles.navigationCore}>
        <button className='py-4'>
          <ArrowBackIosNewIcon />
        </button>
      </div>
      <div className='grid gap-2'>
        <ButtonChannel
          href='/error'
          name='general'
          img='/placeholder.jpg'
          variant='outlined'
        />
        <ButtonChannel
          href='/error'
          name='finance'
          img='/new_york.jpeg'
          variant='outlined'
        />
        <ButtonChannel
          href='/error'
          name='sports'
          img='/soccer.jpeg'
          variant='outlined'
        />
        <ButtonChannel
          href='/error'
          name='politics'
          img='/supreme_court.jpeg'
          variant='outlined'
        />
        <ButtonChannel
          href='/error'
          name='gaming'
          img='/esports.jpeg'
          variant='outlined'
        />
      </div>
    </div>
  );
}
