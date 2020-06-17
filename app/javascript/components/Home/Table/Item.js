import React, {Component} from 'react';
import Thumbnail from './Thumbnail'

const Item = (props) => {

    return(
        <div className="row">
            <div className="col-md-10 offset-md-1">
                <div className="text-center">
                    <div className="card px-5">
                        <div className="row">
                            <div className="col-md-4">
                                <Thumbnail />
                            </div>
                            <div className="col-md-8">
                                <div className="pt-4 pb-4">
                                    <h4></h4>
                                    <p></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}