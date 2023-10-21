import React from 'react';

const PostCardTime = ({ timestamp }) => {
  function customFormatRelative(date, baseDate) {
    const seconds = Math.floor((baseDate - date) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 60) {
      return `${seconds} ${seconds === 1 ? 'sec' : 'secs'} ago`;
    } else if (minutes < 60) {
      return `${minutes} ${minutes === 1 ? 'min' : 'mins'} ago`;
    } else if (hours < 24) {
      return `${hours} ${hours === 1 ? 'hr' : 'hrs'} ago`;
    } else if (weeks < 3) {
      return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
    } else if (months < 11) {
      return `${months} ${months === 1 ? 'month' : 'months'} ago`;
    } else {
      return `${years} ${years === 1 ? 'year' : 'years'} ago`;
    }
  }

  return (
    <div>
      <p className="text-xs font-semibold text-muted-foreground">{customFormatRelative(new Date(timestamp), new Date())}</p>
    </div>
  );
}

export default PostCardTime;
