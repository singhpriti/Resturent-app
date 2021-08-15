import React from 'react'
import './style.css'

const MenuCrad = ({ menuData }) => {

    return (
        <>
            <section className="main-card--cointainer">
                {
                    menuData.map((curElem) => {
                        const { id, name, image, category, description } = curElem;
                        return (
                            <>
                                <div className=" card-container" key={id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <span className="card-number card-circle subtle" >{id}</span>
                                            <span className="card-author subtle">{category} </span>
                                            <h2 className="card-title">{name}</h2>
                                            <span className="card-description subtle">
                                                {description}
                                            </span>
                                            <div className="card-read">read</div>
                                        </div>
                                        <img src={image} alt="image" className="card-image" />
                                        <span className="card-tag  subtle">order now</span>
                                    </div>
                                </div>
                            </>

                        )
                    })
                }
            </section>


        </>
    )
}

export default MenuCrad;
