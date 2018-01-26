import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/';

import Colors from '../../views/Theme/Colors/';
import Typography from '../../views/Theme/Typography/';

import Charts from '../../views/Charts/';
import Widgets from '../../views/Widgets/';

// Base
import Cards from '../../views/Base/Cards/';
import Switches from '../../views/Base/Switches/';
import Tabs from '../../views/Base/Tabs/';
import Breadcrumbs from '../../views/Base/Breadcrumbs/';
import Carousels from '../../views/Base/Carousels/';
import Collapses from '../../views/Base/Collapses/';
import Dropdowns from '../../views/Base/Dropdowns/';
import Jumbotrons from '../../views/Base/Jumbotrons/';
import ListGroups from '../../views/Base/ListGroups/';
import Navbars from '../../views/Base/Navbars/';
import Navs from '../../views/Base/Navs/';
import Paginations from '../../views/Base/Paginations/';
import Popovers from '../../views/Base/Popovers/';
import ProgressBar from '../../views/Base/ProgressBar/';
import Tooltips from '../../views/Base/Tooltips/';

// Buttons
import Buttons from '../../views/Buttons/Buttons/';
import ButtonDropdowns from '../../views/Buttons/ButtonDropdowns/';
import ButtonGroups from '../../views/Buttons/ButtonGroups/';
import LoadingButtons from '../../views/Buttons/LoadingButtons/';
import SocialButtons from '../../views/Buttons/SocialButtons/';

// Editors
import TextEditors from '../../views/Editors/TextEditors';
import CodeEditors from '../../views/Editors/CodeEditors';

// Forms
import BasicForms from '../../views/Forms/BasicForms/';
import AdvancedForms from '../../views/Forms/AdvancedForms';

import GoogleMaps from '../../views/GoogleMaps/';

// Icons
import Flags from '../../views/Icons/Flags/';
import FontAwesome from '../../views/Icons/FontAwesome/';
import SimpleLineIcons from '../../views/Icons/SimpleLineIcons/';

// Notifications
import Alerts from '../../views/Notifications/Alerts/';
import Badges from '../../views/Notifications/Badges/';
import Modals from '../../views/Notifications/Modals/';
import Toastr from '../../views/Notifications/Toastr/';

// Plugins
import Calendar from '../../views/Plugins/Calendar/';
import Spinners from '../../views/Plugins/Spinners/';

// Tables
import DataTable from '../../views/Tables/DataTable/';
import Tables from '../../views/Tables/Tables/';

// UI Kits
import Invoice from '../../views/UI-Kits/Invoicing/';
import Inbox from '../../views/UI-Kits/Email/Inbox/';
import Message from '../../views/UI-Kits/Email/Message/';
import Compose from '../../views/UI-Kits/Email/Compose/';

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                <Route path="/theme/colors" name="Colors" component={Colors}/>
                <Route path="/theme/typography" name="Typography" component={Typography}/>
                <Route path="/base/cards" name="Cards" component={Cards}/>
                <Route path="/base/switches" name="Swithces" component={Switches}/>
                <Route path="/base/tabs" name="Tabs" component={Tabs}/>
                <Route path="/base/breadcrumbs" name="Breadcrumbs" component={Breadcrumbs}/>
                <Route path="/base/carousels" name="Carousels" component={Carousels}/>
                <Route path="/base/collapses" name="Collapses" component={Collapses}/>
                <Route path="/base/dropdowns" name="Dropdowns" component={Dropdowns}/>
                <Route path="/base/jumbotrons" name="Jumbotrons" component={Jumbotrons}/>
                <Route path="/base/list-groups" name="ListGroups" component={ListGroups}/>
                <Route path="/base/navbars" name="Navbars" component={Navbars}/>
                <Route path="/base/navs" name="Navs" component={Navs}/>
                <Route path="/base/paginations" name="Paginations" component={Paginations}/>
                <Route path="/base/popovers" name="Popovers" component={Popovers}/>
                <Route path="/base/progress-bar" name="Progress Bar" component={ProgressBar}/>
                <Route path="/base/tooltips" name="Tooltips" component={Tooltips}/>
                <Route path="/buttons/buttons" name="Buttons" component={Buttons}/>
                <Route path="/buttons/button-dropdowns" name="ButtonDropdowns" component={ButtonDropdowns}/>
                <Route path="/buttons/button-groups" name="ButtonGroups" component={ButtonGroups}/>
                <Route path="/buttons/loading-buttons" name="Loading Buttons" component={LoadingButtons}/>
                <Route path="/buttons/social-buttons" name="Social Buttons" component={SocialButtons}/>
                <Route path="/charts" name="Charts" component={Charts}/>
                <Route path="/editors/text-editors" name="Text Editors" component={TextEditors}/>
                <Route path="/editors/code-editors" name="Code Editors" component={CodeEditors}/>
                <Route path="/forms/basic-forms" name="Basic Forms" component={BasicForms}/>
                <Route path="/forms/advanced-forms" name="Advanced Forms" component={AdvancedForms}/>
                <Route path="/google-maps" name="Google Maps" component={GoogleMaps}/>
                <Route path="/icons/flags" name="Flags" component={Flags}/>
                <Route path="/icons/font-awesome" name="Font Awesome" component={FontAwesome}/>
                <Route path="/icons/simple-line-icons" name="Simple Line Icons" component={SimpleLineIcons}/>
                <Route path="/notifications/alerts" name="Alerts" component={Alerts}/>
                <Route path="/notifications/badges" name="Badges" component={Badges}/>
                <Route path="/notifications/modals" name="Modals" component={Modals}/>
                <Route path="/notifications/toastr" name="Toastr" component={Toastr}/>
                <Route path="/plugins/calendar" name="Calendar" component={Calendar}/>
                <Route path="/plugins/spinners" name="Loading Buttons" component={Spinners}/>
                <Route path="/tables/datatable" name="Data Table" component={DataTable}/>
                <Route path="/tables/tables" name="Tables" component={Tables}/>
                <Route path="/widgets" name="Widgets" component={Widgets}/>
                <Route path="/ui-kits/invoicing/invoice" name="Invoice" component={Invoice}/>
                <Route path="/ui-kits/email/inbox" name="Invoice" component={Inbox}/>
                <Route path="/ui-kits/email/message" name="Message" component={Message}/>
                <Route path="/ui-kits/email/compose" name="Compose" component={Compose}/>
                <Redirect from="/" to="/dashboard"/>
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
