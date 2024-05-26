import { MdStar, MdStarHalf, MdStarOutline } from "react-icons/md";
import React from "react";

export function getStarIcons(rating) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<MdStar key={i} className="star-icon" />);
    } else if (rating >= i - 0.5) {
      stars.push(<MdStarHalf key={i} className="star-icon" />);
    } else {
      stars.push(<MdStarOutline key={i} className="star-icon" />);
    }
  }
  return stars;
}
