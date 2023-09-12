import React from 'react';
import { HouseDoor, Sun, Moon, Star, MusicNote } from 'react-bootstrap-icons';

function IconList() {
   const iconStyle = {
      margin:'50px',

   };
  return (
    <div className="icon-list">
      <div className="row">
        <div className="col-4">
          <HouseDoor size={48} />
        </div>
        <div className="col-4">
          <Sun size={48} />
        </div>
        <div className="col-4">
          <Moon size={48} />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <Star size={48} />
        </div>
        <div className="col-4">
          <MusicNote size={48} />
        </div>
        {/* Add more icons and columns as needed */}
      </div>
    </div>
  );
}

export default IconList;