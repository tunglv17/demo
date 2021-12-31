import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LayoutAdmin from './layout/Admin'
import LayoutWebsite from './layout/Website'
import HomePage from './pages/HomePage'
import Error404 from './pages/404'
import AdminProducts from './pages/Admin/product/AdminProducts'
import AddProducts from './pages/Admin/product/AddProducts'
import AddCategory from './pages/Admin/category/AddCategory'
import EditCategory from './pages/Admin/category/EditCategory'
import AdminCategory from './pages/Admin/category/AdminCategory'
import EditProducts from './pages/Admin/product/EditProducts'
import HeaderWebsite from './components/Header'


const Routers = (props) => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/admin/:path?">
                        <LayoutAdmin>
                            <Route exact path="/admin/product">
                                <AdminProducts {...props}/>
                            </Route>
                            <Route exact path="/admin/product/add">
                                <AddProducts {...props}/>
                            </Route>
                            <Route exact path="/admin/product/edit/:id">
                                <EditProducts {...props}/>
                            </Route>
                            <Route exact path="/admin/category">
                                <AdminCategory />
                            </Route>
                            <Route exact path="/admin/category/add">
                                <AddCategory />
                            </Route>
                            <Route exact path="/admin/category/edit/:id">
                                <EditCategory />
                            </Route>
                        </LayoutAdmin>
                    </Route>
                    <Route>
                        <LayoutWebsite>
                            <HeaderWebsite />
                            <Switch>
                                <Route exact path="/">
                                    <HomePage {...props} />
                                </Route>
                                <Route path="*">
                                    <Error404 />
                                </Route>
                            </Switch>
                        </LayoutWebsite>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
export default Routers