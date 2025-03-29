export default function ImageViewer() {
    return (
        <div className="image-viewer">
            <ViewerContent />
        </div>
    )
}

function ViewerContent() {
    return (
        <div className="viewer-content">
            <PrevBotton />
            <ImageContainer image="/HelloWorld.JPG" />
            <NextBotton />
        </div>
    );
}

function ImageContainer({ image }: { image: string }) {
    return (
        <div className="image-container">
            <img
                src={image}
                alt="Hello World"
                className="image"
                style={{ 
                    aspectRatio: '6240/4160',
                }}
            />
            <InfoPanel />
        </div>
    );
}

function PrevBotton() {
    return (
        <div className="nav-area prev-area">
            <button className="nav-button prev">＜</button>
        </div>
    )
}

function NextBotton() {
    return (
        <div className="nav-area next-area">
            <button className="nav-button next">＞</button>
        </div>
    )
}

function InfoPanel() {
    return (
        <div className="info-panel">
            <ExifInfo />
            <DeviceInfo />
        </div>
    );
}

function ExifInfo() {
    return (
        <div>
            <div className="exif-info">56mm f/1.4 ISO320 | X-S10 + SIGMA F1.4 DC DN</div>
        </div>
    );
}

function DeviceInfo() {
    return (
        <div>
            <div className="device-info">Nikon Z50 Ⅱ</div>
        </div>
    );
}