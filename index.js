// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
  }
  
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blockLength = 264;
    const distanceInBlocks = Math.abs(startBlock - endBlock);
    return distanceInBlocks * blockLength;
  }
  
 

  function distanceFromHqInFeet(pickupLocation) {
    const distanceInBlocks = distanceFromHqInBlocks(pickupLocation); // calculate the distance in blocks
    const feetInBlock = 264; // each block is 264 feet long
    return distanceInBlocks * feetInBlock; // calculate the distance in feet from headquarters
  }

  function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock);
    
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  
  