import React, { component } from 'react'
import Card from './card'
import img1 from '../asserts/nouman.jpg'
import img2 from '../asserts/download1.jpeg'
class Cards extends component {
   render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="nouman" />
                    </div>

                    <div className="col-md-4">
                        <Card imgsrc={img1} title="nouman1" />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title="nouman2" />
                    </div>
                </div>

            </div>

        )
    }
}


export default Cards 