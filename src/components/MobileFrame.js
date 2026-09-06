import './MobileFrame.css';

const MobileFrame = () => {
	return (
        <>
            <div className="smartphone-frame">
                <iframe
                    title="DL Theme e-Commerce wrapper"
                    src="https://ionic-dl-theme.vercel.app/tabs/tab1"
                    className="smartphone-screen">
                </iframe>
            </div>
        </>
	);
}

export default MobileFrame;