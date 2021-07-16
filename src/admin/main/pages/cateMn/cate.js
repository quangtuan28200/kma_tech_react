/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

import getDataTable from '../../../../connect/connect';

export default class Cate extends Component {
    constructor(props) {
        super(props);
        this.isComponentMouted = true;
        this.state = {
            dataCate: []
        }
    }

    componentDidMount(){
        this.getDataCate();
    }

    componentWillUnmount(){
        this.isComponentMouted = false;
    }

    //CRUD
    getDataCate = () => {
        getDataTable.category.on("value", categories => {
            if(this.isComponentMouted){
                this.setState({
                    dataCate: this.dataHandle(categories)
                }) 
            }
        })
    }
    addCate = (cateName) => {
        getDataTable.category.push({
            name: cateName,
            createAt: new Date().toLocaleString(),
        })
    }
    deleteCate = (id) => {
        getDataTable.category.child(id).remove()
    }

    dataHandle = (categories) => {
        var dataCate = []
        categories.forEach(element => {
            dataCate.push({
                id: element.key,
                name: element.val().name,
                createAt: element.val().createAt,
            })
        });
        return dataCate
    }

    renderDataCate = () => (
        this.state.dataCate.map((category, index) => (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{category.name}</td>
                <td>{category.createAt}</td>
                <td>
                    <div className="delete btn_action" onClick={() => this.deleteCate(category.id)}>Delete</div>
                </td>
            </tr>
        ))
    )
    
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Name category</th>
                            <th scope="col">CreatedAt</th>
                            <th scope="col" style={{width: "97px"}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderDataCate()}
                    </tbody>
                </table>

                <form id="add_category">
                    <div className="form-group">
                        <label htmlFor="name">Category</label>
                        <input  
                            ref={(input) => {this.refCateName = input}}
                            style={{ padding: 7 }} 
                            type="text" 
                            className="form-control" 
                            id="input_nameCategory" 
                            placeholder="Enter Name Category" 
                        />
                    </div>
                    <button type="reset" className="add_btn" onClick={() => this.addCate(this.refCateName.value)}>ADD</button>
                </form>
            </div>
        )
    }
}
