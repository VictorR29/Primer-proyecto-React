import React from 'react'
import Card from './Card'
import './cardlist.css'

const cardListData = [
    {
        username: '@Vikthor',
        id: 1,
        followers: '1483',
        todayFollowers: 12,
        icon: 'Img/icons8-facebook-nuevo-64.png',
        name: 'facebook',
    },
    {
        username: '@Vikthor',
        id: 2,
        followers: '28k',
        todayFollowers: 45,
        icon: 'Img/icons8-twitter-64.png',
        name: 'twitter',
    },
    {
        username: '@Vikthor',
        id: 3,
        followers: '6k',
        todayFollowers: 23,
        icon: 'Img/icons8-instagram-64.png',
        name: 'instagram',
    },
    {
        username: '@Vikthor',
        id: 4,
        followers: '12k',
        todayFollowers: -67,
        icon: 'Img/icons8-youtube-play-64.png',
        name: 'youtube',
    },
]

function TopCardsList(){
    return(
        <section className="top-cards">
            <div className="wrapper">
                <div className="grid">
                    {
                        cardListData.map((cardData) => <Card key={cardData.id} {...cardData} />)
                    }
                    {/* <article className="card twitter">
                        <p className="card-title">
                            <img src="Img/icons8-twitter-64.png" alt="" />
                            @V1kth0r
                        </p>
                        <p className="card-followers">
                            <span className="card-followers-number">28k</span>
                            <span className="card-followers-title">Followers</span>
                        </p>
                        <p className="card-today">
                            <img src="Img/icons8-doble-arriba-16.png" alt="" />
                            12 today
                        </p>
                    </article>
                    <article className="card instagram">
                        <p className="card-title">
                            <img src="Img/icons8-instagram-64.png" alt="" />
                            @V1kth0r
                        </p>
                        <p className="card-followers">
                            <span className="card-followers-number">6k</span>
                            <span className="card-followers-title">Followers</span>
                        </p>
                        <p className="card-today">
                            <img src="Img/icons8-doble-arriba-16.png" alt="" />
                            12 today
                        </p>
                    </article>
                    <article className="card youtube">
                        <p className="card-title">
                            <img src="Img/icons8-youtube-play-64.png" alt="" />
                            @V1kth0r
                        </p>
                        <p className="card-followers">
                            <span className="card-followers-number">19k</span>
                            <span className="card-followers-title">Followers</span>
                        </p>
                        <p className="card-today">
                            <img src="Img/icons8-doble-arriba-16.png" alt="" />
                            12 today
                        </p>
                    </article> */}
                </div>
            </div>   
        </section>
    );
};

export default TopCardsList
