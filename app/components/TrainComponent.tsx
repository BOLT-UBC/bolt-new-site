import React from 'react'

function TrainComponent() {

    const trainImages = [
        'images/train-placeholder.png',
        'images/train-placeholder.png',
        'images/train-placeholder.png',
        'images/train-placeholder.png'
    ];

  return (
    <div className="overflow-hidden whitespace-nowrap w-full">
        <div className="flex animate-move-train">
        {trainImages.map((src, index) => (
            <div key={`first-${index}`} className="mx-2">
                <img src={src} alt={`Car ${index}`} className="w-[36rem] h-auto" />
            </div>
        ))}
        </div>
    </div>
  )
}

export default TrainComponent