import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LayoutAdmin from './layout/Admin'
import LayoutWebsite from './layout/Website'
import HomePage from './pages/HomePage'
import Error404 from './pages/404'
import ListUsers from './pages/Admin/Users'
import EditProfile from './pages/Admin/EditProfile'
import AdminProducts from './pages/Admin/product/AdminProducts'
import AddProducts from './pages/Admin/product/AddProducts'
import AddCategory from './pages/Admin/category/AddCategory'
import EditCategory from './pages/Admin/category/EditCategory'
import AdminCategory from './pages/Admin/category/AdminCategory'
import EditProducts from './pages/Admin/product/EditProducts'


const Routers = (props) => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/admin/:path?">
                        <LayoutAdmin>
                            <Route exact path="/admin/user">
                            <ListUsers {...props} />
                            </Route>
                            <Route exact path="/admin/user/:id">
                                <EditProfile {...props}/>
                            </Route>
                            
                            <Route exact path="/admin/product">
                                <AdminProducts {...props}/>
                            </Route>
                            <Route exact path="/admin/product/add">
                                <AddProducts />
                            </Route>
                            <Route exact path="/admin/product/edit/:id">
                                <EditProducts />
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