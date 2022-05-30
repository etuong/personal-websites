const { useState } = React;
const { createRoot } = ReactDOM;

const PortfolioComponent = (props) => {
    return (
        <section className="pt-page" data-id="portfolio">
            <div className="section-inner custom-page-content">
                <div className="page-header color-1">
                    <h2>Portfolio</h2>
                </div>
                <div className="page-content">

                    <ul id="portfolio_filters" className="portfolio-filters">
                        <li className="active">
                            <a className="filter btn btn-sm btn-link active" data-group="all">All</a>
                        </li>
                        <li>
                            <a className="filter btn btn-sm btn-link" data-group="code">Code</a>
                        </li>
                        <li>
                            <a className="filter btn btn-sm btn-link" data-group="photo">Photography</a>
                        </li>
                        <li>
                            <a className="filter btn btn-sm btn-link" data-group="hdr">HDR</a>
                        </li>
                        <li>
                            <a className="filter btn btn-sm btn-link" data-group="shop">Photoshop</a>
                        </li>
                        <li>
                            <a className="filter btn btn-sm btn-link" data-group="solid">SolidWorks</a>
                        </li>
                    </ul>

                    <div id="portfolio_grid" className="portfolio-grid">
                        <figure className="item" data-groups='["all", "code"]'>
                            <a className="ajax-page-load" href="pages/project/project-8.html">
                                <img className="img-fluid img-thumbnail" src="./images/portfolio/askS.jpg" alt="" />
                                <div>
                                    <h5 className="name">Ask Ethan!</h5>
                                </div>
                            </a>
                        </figure>

                        <figure className="item" data-groups='["all", "photo"]'>
                            <a className="d-block h-100" data-fancybox="photo" href="images/portfolio/favColorL.jpg">
                                <img className="img-fluid img-thumbnail" src="./images/portfolio/favColorS.jpg" alt="" />
                            </a>
                        </figure>

                        <figure className="item" data-groups='["all", "solid"]'>
                            <a className="d-block h-100" data-fancybox="solid" href="images/portfolio/swPlaneL.jpg">
                                <img className="img-fluid img-thumbnail" src="./images/portfolio/swPlaneS.jpg" alt="" />
                            </a>
                        </figure>

                        <figure className="item" data-groups='["all", "shop"]'>
                            <a className="d-block h-100" data-fancybox="shop" href="images/portfolio/pcUsaL.jpg">
                                <img className="img-fluid img-thumbnail" src="./images/portfolio/pcUsaS.jpg" alt="" />
                            </a>
                        </figure>

                        <figure className="item" data-groups='["all", "code"]'>
                            <a className="ajax-page-load" href="pages/project/project-5.html">
                                <img className="img-fluid img-thumbnail" src="./images/portfolio/wpfS.jpg" alt="" />
                                <div>
                                    <h5 className="name">Windows Presentation Foundation && Model-View-ViewModel</h5>
                                </div>
                            </a>
                        </figure>

                        <figure className="item" data-groups='["all", "hdr"]'>
                            <a className="d-block h-100" data-fancybox="hdr" href="images/portfolio/hdrWallL.jpg">
                                <img className="img-fluid img-thumbnail" src="./images/portfolio/hdrWallS.jpg" alt="" />
                            </a>
                        </figure>

                        <figure className="item" data-groups='["all", "hdr"]'>
                            <a className="d-block h-100" data-fancybox="hdr" href="images/portfolio/hdrChicagoL.jpg">
                                <img className="img-fluid img-thumbnail" src="./images/portfolio/hdrChicagoS.jpg" alt="" />
                            </a>
                        </figure>

                        <figure className="item" data-groups='["all", "code"]'>
                            <a className="ajax-page-load" href="pages/project/project-3.html">
                                <img className="img-fluid img-thumbnail" src="./images/portfolio/visionS.jpg" alt="" />
                                <div>
                                    <h5 className="name">Computer Vision</h5>
                                </div>
                            </a>
                        </figure>

                        <figure className="item" data-groups='["all", "shop"]'>
                            <a className="d-block h-100" data-fancybox="shop" href="images/portfolio/pcWarsawL.jpg">
                                <img className="img-fluid img-thumbnail" src="./images/portfolio/pcWarsawS.jpg" alt="" />
                            </a>
                        </figure>

                        <figure className="item" data-groups='["all", "photo"]'>
                            <a className="d-block h-100" data-fancybox="photo" href="images/portfolio/favCappadociaL.jpg">
                                <img className="img-fluid img-thumbnail" src="./images/portfolio/favCappadociaS.jpg" alt="" />
                            </a>
                        </figure>

                        <figure className="item" data-groups='["all", "code"]'>
                            <a className="ajax-page-load" href="pages/project/project-7.html">
                                <img className="img-fluid img-thumbnail" src="./images/portfolio/algoS.jpg" alt="" />
                                <div>
                                    <h5 className="name">Data Structures and Algorithms</h5>
                                </div>
                            </a>
                        </figure>

                        <figure className="item" data-groups='["all", "hdr"]'>
                            <a className="d-block h-100" data-fancybox="hdr" href="images/portfolio/hdrDancingL.jpg">
                                <img className="img-fluid img-thumbnail" src="./images/portfolio/hdrDancingS.jpg" alt="" />
                            </a>
                        </figure>

                        <figure className="item" data-groups='["all", "solid"]'>
                            <a className="d-block h-100" data-fancybox="solid" href="images/portfolio/swSkateL.jpg">
                                <img className="img-fluid img-thumbnail" src="./images/portfolio/swSkateS.jpg" alt="" />
                            </a>
                        </figure>

                        <figure className="item" data-groups='["all", "code"]'>
                            <a className="ajax-page-load" href="pages/project/project-4.html">
                                <img className="img-fluid img-thumbnail" src="./images/portfolio/finiteS.jpg" alt="" />
                                <div>
                                    <h5 className="name">Finite Element</h5>
                                </div>
                            </a>
                        </figure>

                        <figure className="item" data-groups='["all", "solid"]'>
                            <a className="d-block h-100" data-fancybox="solid" href="images/portfolio/swDriveL.jpg">
                                <img className="img-fluid img-thumbnail" src="./images/portfolio/swDriveS.jpg" alt="" />
                            </a>
                        </figure>

                        <figure className="item" data-groups='["all", "photo"]'>
                            <a className="d-block h-100" data-fancybox="photo" href="images/portfolio/favElephantL.jpg">
                                <img className="img-fluid img-thumbnail" src="./images/portfolio/favElephantS.jpg" alt="" />
                            </a>
                        </figure>

                        <figure className="item" data-groups='["all", "code"]'>
                            <a className="ajax-page-load" href="pages/project/project-1.html">
                                <img className="img-fluid img-thumbnail" src="./images/portfolio/lightS.jpg" alt="" />
                                <div>
                                    <h5 className="name">Personal Website - Light Version</h5>
                                </div>
                            </a>
                        </figure>

                        <figure className="item" data-groups='["all", "shop"]'>
                            <a className="d-block h-100" data-fancybox="shop" href="images/portfolio/pcSiemReapL.jpg">
                                <img className="img-fluid img-thumbnail" src="./images/portfolio/pcSiemReapS.jpg" alt="" />
                            </a>
                        </figure>

                        <figure className="item" data-groups='["all", "shop"]'>
                            <a className="d-block h-100" data-fancybox="shop" href="images/portfolio/psFlameL.jpg">
                                <img className="img-fluid img-thumbnail" src="./images/portfolio/psFlameS.jpg" alt="" />
                            </a>
                        </figure>

                        <figure className="item" data-groups='["all", "code"]'>
                            <a className="ajax-page-load" href="pages/project/project-2.html">
                                <img className="img-fluid img-thumbnail" src="./images/portfolio/darkS.jpg" alt="" />
                                <div>
                                    <h5 className="name">Personal Website - Dark Version</h5>
                                </div>
                            </a>
                        </figure>

                        <figure className="item" data-groups='["all", "photo"]'>
                            <a className="d-block h-100" data-fancybox="photo" href="images/portfolio/favHeadL.jpg">
                                <img className="img-fluid img-thumbnail" src="./images/portfolio/favHeadS.jpg" alt="" />
                            </a>
                        </figure>

                        <figure className="item" data-groups='["all", "photo"]'>
                            <a className="d-block h-100" data-fancybox="photo" href="images/portfolio/favPenangL.jpg">
                                <img className="img-fluid img-thumbnail" src="./images/portfolio/favPenangS.jpg" alt="" />
                            </a>
                        </figure>

                        <figure className="item" data-groups='["all", "photo"]'>
                            <a className="d-block h-100" data-fancybox="photo" href="images/portfolio/favSantoriniL.jpg">
                                <img className="img-fluid img-thumbnail" src="./images/portfolio/favSantoriniS.jpg" alt="" />
                            </a>
                        </figure>

                        <figure className="item" data-groups='["all", "solid"]'>
                            <a className="d-block h-100" data-fancybox="solid" href="images/portfolio/swBulbL.jpg">
                                <img className="img-fluid img-thumbnail" src="./images/portfolio/swBulbS.jpg" alt="" />
                            </a>
                        </figure>

                        <figure className="item" data-groups='["all", "photo"]'>
                            <a className="d-block h-100" data-fancybox="photo" href="images/portfolio/favTempleL.jpg">
                                <img className="img-fluid img-thumbnail" src="./images/portfolio/favTempleS.jpg" alt="" />
                            </a>
                        </figure>

                        <figure className="item" data-groups='["all", "code"]'>
                            <a className="ajax-page-load" href="pages/project/project-6.html">
                                <img className="img-fluid img-thumbnail" src="./images/portfolio/lorenzS.jpg" alt="" />
                                <div>
                                    <h5 className="name">Numerical Analysis</h5>
                                </div>
                            </a>
                        </figure>

                        <figure className="item" data-groups='["all", "shop"]'>
                            <a className="d-block h-100" data-fancybox="shop" href="images/portfolio/psSmokeL.jpg">
                                <img className="img-fluid img-thumbnail" src="./images/portfolio/psSmokeS.jpg" alt="" />
                            </a>
                        </figure>

                        <figure className="item" data-groups='["all", "photo"]'>
                            <a className="d-block h-100" data-fancybox="photo" href="images/portfolio/favCopenhagenL.jpg">
                                <img className="img-fluid img-thumbnail" src="./images/portfolio/favCopenhagenS.jpg" alt="" />
                            </a>
                        </figure>

                    </div>
                </div>
            </div>
        </section>

    )
};


const container = document.getElementById('portfolio_container');
const root = createRoot(container);
root.render(<PortfolioComponent />);
