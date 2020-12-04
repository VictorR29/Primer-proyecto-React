import React from 'react'
import CardSmall from './card-small'
import './overview.css'

const cardSmallList = [
    {
        icon: 'Img/icons8-facebook-nuevo-64.png',
        pageView: '87',
        growth: 3,
        key: 1,
    },
    {
        icon: 'Img/icons8-twitter-64.png',
        pageView: '52',
        growth: 2257 ,
        key: 2,
    },
    {
        icon: 'Img/icons8-instagram-64.png',
        pageView: '5462',
        growth: 1375,
        key: 3,
    },
    {
        icon: 'Img/icons8-youtube-play-64.png',
        pageView: '117',
        growth: 303,
        key: 4,
    },
]

function Overview() {
    return(
        <section className="overview">
            <div className="wraper">
                <h2>Overviews - Today</h2>
                <div className="grid">
                    {
                        cardSmallList.map(({ icon, pageView, growth, key  }) => (
                            <CardSmall
                                icon={icon}
                                pageView={pageView}
                                growth={growth}
                                key={key}
                            />
                        ))
                    }
                    
                        {/* <div class="card-small">
                            <p class="card-small-view">likes</p>
                            <p class="card-small-icon">
                                <img src="Img/icons8-facebook-nuevo-64.png" alt="">
                            </p>
                            <p class="card-small-number">52</p>
                            <p class="card-small-porcent is-danger">
                                <span>
                                    <img src="Img/icons8-doble-abajo-16.png" alt="">
                                    2%
                                </span>
                            </p>
                    </div>
                    <div class="card-small">
                            <p class="card-small-view">Likes</p>
                            <p class="card-small-icon">
                                <img src="Img/icons8-instagram-64.png" alt="">
                            </p>
                            <p class="card-small-number">5462</p>
                            <p class="card-small-porcent">
                                <span>
                                    <img src="Img/icons8-doble-arriba-16.png" alt="">
                                    2257%
                                </span>
                            </p>
                    </div>
                    <div class="card-small">
                            <p class="card-small-view">Profile Views</p>
                            <p class="card-small-icon">
                                <img src="Img/icons8-instagram-64.png" alt="">
                            </p>
                            <p class="card-small-number">52k</p>
                            <p class="card-small-porcent">
                                <span>
                                    <img src="Img/icons8-doble-arriba-16.png" alt="">
                                    1375%
                                </span>
                            </p>
                    </div>
                    <div class="card-small">
                            <p class="card-small-view">Retweets</p>
                            <p class="card-small-icon">
                                <img src="Img/icons8-twitter-64.png" alt="">
                            </p>
                            <p class="card-small-number">117</p>
                            <p class="card-small-porcent">
                                <span>
                                    <img src="Img/icons8-doble-arriba-16.png" alt="">
                                    303%
                                </span>
                            </p>
                    </div>
                    <div class="card-small">
                            <p class="card-small-view">Likes</p>
                            <p class="card-small-icon">
                                <img src="Img/icons8-twitter-64.png" alt="">
                            </p>
                            <p class="card-small-number">507</p>
                            <p class="card-small-porcent">
                                <span>
                                    <img src="Img/icons8-doble-arriba-16.png" alt="">
                                    553%
                                </span>
                            </p>
                    </div>
                    <div class="card-small">
                            <p class="card-small-view">Likes</p>
                            <p class="card-small-icon">
                                <img src="Img/icons8-youtube-play-64.png" alt="">
                            </p>
                            <p class="card-small-number">107</p>
                            <p class="card-small-porcent is-danger">
                                <span>
                                    <img src="Img/icons8-doble-abajo-16.png" alt="">
                                    19%
                                </span>
                            </p>
                    </div>
                    <div class="card-small">
                            <p class="card-small-view">Total Views</p>
                            <p class="card-small-icon">
                                <img src="Img/icons8-youtube-play-64.png" alt="">
                            </p>
                            <p class="card-small-number">1407</p>
                            <p class="card-small-porcent is-danger">
                                <span>
                                    <img src="Img/icons8-doble-abajo-16.png" alt="">
                                    12%
                                </span>
                            </p>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Overview 
