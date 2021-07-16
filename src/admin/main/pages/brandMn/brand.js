import React, { Component } from 'react'

import getDataTable from '../../../../connect/connect'

export default class Brand extends Component {
    constructor(props) {
        super(props);
        this.isComponentMouted = true;
        this.state = {
            dataCate: [],
            dataBrand: [],
        }
    }

    componentDidMount() {
        this.getDataBrand();
    }

    componentWillUnmount() {
        this.isComponentMouted = false;
    }
    
    getDataBrand = () => {
        getDataTable.category.on("value", categories => {
            if (this.isComponentMouted) {
                this.setState({
                    dataCate: this.dataHandle(categories)
                })
            }
        })
        getDataTable.brand.on("value", brands => {
            if (this.isComponentMouted) {
                this.setState({
                    dataBrand: this.dataHandle1(brands)
                })
            }
        })
    }

    addBrand = (dataAdd) => {
        getDataTable.brand.push({
            cateId: dataAdd.cate,
            brand: dataAdd.brand,
            createAt: new Date().toLocaleString(),
        })
    }
    deleteBrand = (id) => {
        getDataTable.brand.child(id).remove()
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

    dataHandle1 = (categories) => {
        var dataCate = []
        this.state.dataCate.forEach(element1 => {           
            categories.forEach(element => {               
                if(element1['id'] === element.val().cateId){
                    dataCate.push({
                        id: element.key,
                        cate: element1['name'],
                        brand: element.val().brand,
                        createAt: element.val().createAt,
                    })
                }
            });
        });
        return dataCate
    }

    renderDataBrand = () => (
        this.state.dataBrand.map((brand, index) => (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{brand.cate}</td>
                <td>{brand.brand}</td>
                <td>{brand.createAt}</td>
                <td>
                    <div className="delete btn_action" onClick={() => this.deleteBrand(brand.id)}>Delete</div>
                </td>
            </tr>
        ))
    )

    renderDataCate = () => (
        this.state.dataCate.map((category, index) => (
            <option key={index} value={category.id}>{category.name}</option>
        ))
    )

    dataAdd = () => {
        return {
            cate: this.refCate.value,
            brand: this.refBrand.value,
        }
    }

    render() {    
        console.log(this.state.dataCate)
        console.log(this.state.dataBrand)
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Name category</th>
                            <th scope="col">Name brand</th>
                            <th scope="col">CreatedAt</th>
                            <th scope="col" style={{ width: "97px" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderDataBrand()}
                    </tbody>
                </table>

                <form id="add_category">
                    <div className="form-group">
                        <label htmlFor="name">Category</label>
                        <select ref={(input) => { this.refCate = input }} id="cateList" className="form-control">
                            {this.renderDataCate()}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Brand</label>
                        <input
                            ref={(input) => { this.refBrand = input }}
                            style={{ padding: 7 }}
                            type="text"
                            className="form-control"
                            id="input_nameCategory"
                            placeholder="Enter Name Brand"
                        />
                    </div>
                    <button type="reset" className="add_btn" onClick={() => this.addBrand(this.dataAdd())}>ADD</button>
                </form>
            </div>
        )
    }
}
