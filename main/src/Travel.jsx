const { useState } = React;
const { createRoot } = ReactDOM;

const TravelComponent = (props) => {
    return (
        <section className="pt-page" data-id="travel">
            <div className="section-inner custom-page-content">
                <div className="page-header color-1">
                    <h2>Travel</h2>
                </div>
                <div id="gmap"></div>
            </div>
        </section>
    )
};


const container = document.getElementById('travel_container');
const root = createRoot(container);
root.render(<TravelComponent />);
