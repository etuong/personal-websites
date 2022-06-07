const { useState } = React;
const { createRoot } = ReactDOM;

const assets = [
    {
        category: "shop",
        href: "pcUsa",
        text: "United States Postcard"
    },
    {
        category: "hdr",
        href: "hdrChicago",
        text: "Chicago, Illinois"
    },
    {
        category: "photo",
        href: "favCappadocia",
        text: "Cappadocia, Turkey"
    },
    {
        category: "hdr",
        href: "hdrDancing",
        text: "Dancing House, Prague, Czech Republic"
    },
    {
        category: "solid",
        href: "swSkate",
        text: "Skateboard"
    },
    {
        category: "solid",
        href: "swDrive",
        text: "USB Drive"
    },
    {
        category: "photo",
        href: "favElephant",
        text: "Elephant, Chiang Mai, Thailand"
    },
    {
        category: "shop",
        href: "psFlame",
        text: "Vegeta's Flame"
    },
    {
        category: "photo",
        href: "favHead",
        text: "Ayutthaya, Thailand"
    },
    {
        category: "photo",
        href: "favPenang",
        text: "Penang, Malaysia"
    },
    {
        category: "solid",
        href: "swBulb",
        text: "Lightbulb"
    },
    {
        category: "shop",
        href: "psSmoke",
        text: "Smoking Pool"
    },
    {
        category: "photo",
        href: "paris",
        text: "Tilting House"
    },
    {
        category: "photo",
        href: "giethoorn",
        text: "Giethoorn"
    },

    {
        category: "code",
        page: "project-8",
        href: "ask",
        text: "Ask Ethan!"
    },
    {
        category: "code",
        page: "project-5",
        href: "wpf",
        text: "Windows Presentation Foundation && Model-View-ViewModel"
    },
    {
        category: "code",
        page: "project-3",
        href: "vision",
        text: "Computer Vision"
    },
    {
        category: "code",
        page: "project-7",
        href: "algo",
        text: "Data Structures and Algorithms"
    },
    {
        category: "code",
        page: "project-4",
        href: "finite",
        text: "Finite Element"
    },
    {
        category: "code",
        page: "project-1",
        href: "light",
        text: "Personal Website - Light Version"
    },
    {
        category: "code",
        page: "project-2",
        href: "dark",
        text: "Personal Website - Dark Version"
    },
    {
        category: "code",
        page: "project-6",
        href: "lorenz",
        text: "Numerical Analysis"
    },
    {
        category: "code",
        page: "project-9",
        href: "data",
        text: "Data Science"
    },
    {
        category: "code",
        page: "project-10",
        href: "book",
        text: "BookSmart"
    },
]


const PortfolioComponent = () => {
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

                    <div className="portfolio-grid">
                        {
                            assets.sort(() => Math.random() - 0.5).map((asset, index) => {
                                return <figure key={index} className="item" data-groups={`["all", "${asset.category}"]`}>
                                    <a className={asset.page ? "ajax-page-load" : "d-block h-100"} data-fancybox={`${asset.category}`} href={asset.page ? `pages/project/${asset.page}.html` : `images/portfolio/${asset.href}L.jpg`}>
                                        <img className="img-fluid img-thumbnail" src={`images/portfolio/${asset.href}S.jpg`} alt="" />
                                        <div>
                                            <h5 className="name">{asset.text}</h5>
                                        </div>
                                    </a>
                                </figure>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>

    )
};


const container = document.getElementById('portfolio_container');
const root = createRoot(container);
root.render(<PortfolioComponent />);
