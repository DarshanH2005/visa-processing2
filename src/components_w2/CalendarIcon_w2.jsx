import React from 'react';
import calendarSrc from '../assets/calendar-16x18.svg';

export default function CalendarIcon({ className = '', width = 16, height = 18, alt = 'calendar' }) {
  return (
    <img src={calendarSrc} className={className} width={width} height={height} alt={alt} />
  );
}
