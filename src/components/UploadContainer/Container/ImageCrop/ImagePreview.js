import React from 'react'

export const ImagePreview = (imagePreviewCanvasRef) => {

   

    return (
        <div>
            <canvas ref={imagePreviewCanvasRef}></canvas>
        </div>
    )
}
