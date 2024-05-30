import Summary from "./components/Summary.js";
import ProjectProgressSummary from "./components/ProjectProgressSummary.js";
import WhatsNew from "./components/WhatsNew.js";
import LatestActivity from "./components/LatestActivity.js";
import NewProducts from "./components/NewProducts.js";

export default {
  components: {
    Summary,
    ProjectProgressSummary,
    WhatsNew,
    LatestActivity,
    NewProducts,
  },
  template: `
    <div class="loader-bg" style="display: none;">
            <div class="loader-bar"></div>
        </div>

        <div
            id="pcoded"
            class="pcoded iscollapsed"
            nav-type="st2"
            theme-layout="vertical"
            vertical-placement="left"
            vertical-layout="wide"
            pcoded-device-type="desktop"
            vertical-nav-type="offcanvas"
            vertical-effect="shrink"
            vnavigation-view="view1"
            fream-type="theme1"
            layout-type="light"
        >
            <div class="pcoded-overlay-box"></div>
            <div class="pcoded-container navbar-wrapper">
                <nav class="navbar header-navbar pcoded-header iscollapsed" header-theme="themelight1" pcoded-header-position="fixed">
                    <div class="navbar-wrapper">
                        <div class="navbar-logo" logo-theme="theme6">
                            <a href="#">
                                <img class="img-fluid" src="./template_files/logo.png" alt="Theme-Logo" />
                            </a>
                            <a class="mobile-menu" id="mobile-collapse" href="#!">
                                <i class="feather icon-menu icon-toggle-left"></i>
                            </a>
                            <a class="mobile-options waves-effect waves-light">
                                <i class="feather icon-more-horizontal"></i>
                            </a>
                        </div>
                        <div class="navbar-container container-fluid">
                            <ul class="nav-left">
                                <li class="header-search">
                                    <div class="main-search morphsearch-search">
                                        <div class="input-group">
                                            <span class="input-group-prepend search-close">
                                                <i class="feather icon-x input-group-text"></i>
                                            </span>
                                            <input type="text" class="form-control" placeholder="Enter Keyword" />
                                            <span class="input-group-append search-btn">
                                                <i class="feather icon-search input-group-text"></i>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="#!" onclick="javascript:toggleFullScreen()" class="waves-effect waves-light">
                                        <i class="full-screen feather icon-maximize"></i>
                                    </a>
                                </li>
                            </ul>
                            <ul class="nav-right">
                                <li class="header-notification">
                                    <div class="dropdown-primary dropdown">
                                        <div class="dropdown-toggle" data-toggle="dropdown">
                                            <i class="feather icon-bell"></i>
                                            <span class="badge bg-c-red">5</span>
                                        </div>
                                        <ul class="show-notification notification-view dropdown-menu" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                            <li>
                                                <h6>Notifications</h6>
                                                <label class="label label-danger">New</label>
                                            </li>
                                            <li>
                                                <div class="media">
                                                    <img class="img-radius" src="./template_files/avatar-4.jpg" alt="Generic placeholder image" />
                                                    <div class="media-body">
                                                        <h5 class="notification-user">John Doe</h5>
                                                        <p class="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                                        <span class="notification-time">30 minutes ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="media">
                                                    <img class="img-radius" src="./template_files/avatar-3.jpg" alt="Generic placeholder image" />
                                                    <div class="media-body">
                                                        <h5 class="notification-user">Joseph William</h5>
                                                        <p class="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                                        <span class="notification-time">30 minutes ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="media">
                                                    <img class="img-radius" src="./template_files/avatar-4.jpg" alt="Generic placeholder image" />
                                                    <div class="media-body">
                                                        <h5 class="notification-user">Sara Soudein</h5>
                                                        <p class="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                                        <span class="notification-time">30 minutes ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="header-notification">
                                    <div class="dropdown-primary dropdown">
                                        <div class="displayChatbox dropdown-toggle" data-toggle="dropdown">
                                            <i class="feather icon-message-square"></i>
                                            <span class="badge bg-c-green">3</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="user-profile header-notification">
                                    <div class="dropdown-primary dropdown">
                                        <div class="dropdown-toggle" data-toggle="dropdown">
                                            <img src="./template_files/avatar-4.jpg" class="img-radius" alt="User-Profile-Image" />
                                            <span>John Doe</span>
                                            <i class="feather icon-chevron-down"></i>
                                        </div>
                                        <ul class="show-notification profile-notification dropdown-menu" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                            <li>
                                                <a href="#!"> <i class="feather icon-settings"></i> Settings </a>
                                            </li>
                                            <li>
                                                <a href="#"> <i class="feather icon-user"></i> Profile </a>
                                            </li>
                                            <li>
                                                <a href="#"> <i class="feather icon-mail"></i> My Messages </a>
                                            </li>
                                            <li>
                                                <a href="#"> <i class="feather icon-lock"></i> Lock Screen </a>
                                            </li>
                                            <li>
                                                <a href="#"> <i class="feather icon-log-out"></i> Logout </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div id="sidebar" class="users p-chat-user showChat">
                    <div class="had-container">
                        <div class="p-fixed users-main">
                            <div class="user-box">
                                <div class="chat-search-box">
                                    <a class="back_friendlist">
                                        <i class="feather icon-x"></i>
                                    </a>
                                    <div class="right-icon-control">
                                        <div class="input-group input-group-button">
                                            <input type="text" id="search-friends" name="footer-email" class="form-control" placeholder="Search Friend" />
                                            <div class="input-group-append">
                                                <button class="btn btn-primary waves-effect waves-light" type="button"><i class="feather icon-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 519px;">
                                    <div class="main-friend-list" style="overflow: hidden; width: auto; height: 519px;">
                                        <div class="media userlist-box waves-effect waves-light" data-id="1" data-status="online" data-username="Josephin Doe">
                                            <a class="media-left" href="#!">
                                                <img class="media-object img-radius img-radius" src="./template_files/avatar-3.jpg" alt="Generic placeholder image " />
                                                <div class="live-status bg-success"></div>
                                            </a>
                                            <div class="media-body">
                                                <div class="chat-header">Josephin Doe</div>
                                            </div>
                                        </div>
                                        <div class="media userlist-box waves-effect waves-light" data-id="2" data-status="online" data-username="Lary Doe">
                                            <a class="media-left" href="#!">
                                                <img class="media-object img-radius" src="./template_files/avatar-2.jpg" alt="Generic placeholder image" />
                                                <div class="live-status bg-success"></div>
                                            </a>
                                            <div class="media-body">
                                                <div class="f-13 chat-header">Lary Doe</div>
                                            </div>
                                        </div>
                                        <div class="media userlist-box waves-effect waves-light" data-id="3" data-status="online" data-username="Alice">
                                            <a class="media-left" href="#!">
                                                <img class="media-object img-radius" src="./template_files/avatar-4.jpg" alt="Generic placeholder image" />
                                                <div class="live-status bg-success"></div>
                                            </a>
                                            <div class="media-body">
                                                <div class="f-13 chat-header">Alice</div>
                                            </div>
                                        </div>
                                        <div class="media userlist-box waves-effect waves-light" data-id="4" data-status="offline" data-username="Alia">
                                            <a class="media-left" href="#!">
                                                <img class="media-object img-radius" src="./template_files/avatar-3.jpg" alt="Generic placeholder image" />
                                                <div class="live-status bg-default"></div>
                                            </a>
                                            <div class="media-body">
                                                <div class="f-13 chat-header">Alia<small class="d-block text-muted">10 min ago</small></div>
                                            </div>
                                        </div>
                                        <div class="media userlist-box waves-effect waves-light" data-id="5" data-status="offline" data-username="Suzen">
                                            <a class="media-left" href="#!">
                                                <img class="media-object img-radius" src="./template_files/avatar-2.jpg" alt="Generic placeholder image" />
                                                <div class="live-status bg-default"></div>
                                            </a>
                                            <div class="media-body">
                                                <div class="f-13 chat-header">Suzen<small class="d-block text-muted">15 min ago</small></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slimScrollBar" style="background: rgb(0, 0, 0); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;"></div>
                                    <div class="slimScrollRail" style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="showChat_inner">
                    <div class="media chat-inner-header">
                        <a class="back_chatBox"> <i class="feather icon-x"></i> Josephin Doe </a>
                    </div>
                    <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 444px;">
                        <div class="main-friend-chat" style="overflow: hidden; width: auto; height: 444px;">
                            <div class="media chat-messages">
                                <a class="media-left photo-table" href="#!">
                                    <img class="media-object img-radius img-radius m-t-5" src="./template_files/avatar-2.jpg" alt="Generic placeholder image" />
                                </a>
                                <div class="media-body chat-menu-content">
                                    <div class="">
                                        <p class="chat-cont">I'm just looking around. Will you tell me something about yourself?</p>
                                    </div>
                                    <p class="chat-time">8:20 a.m.</p>
                                </div>
                            </div>
                            <div class="media chat-messages">
                                <div class="media-body chat-menu-reply">
                                    <div class="">
                                        <p class="chat-cont">Ohh! very nice</p>
                                    </div>
                                    <p class="chat-time">8:22 a.m.</p>
                                </div>
                            </div>
                            <div class="media chat-messages">
                                <a class="media-left photo-table" href="#!">
                                    <img class="media-object img-radius img-radius m-t-5" src="./template_files/avatar-2.jpg" alt="Generic placeholder image" />
                                </a>
                                <div class="media-body chat-menu-content">
                                    <div class="">
                                        <p class="chat-cont">can you come with me?</p>
                                    </div>
                                    <p class="chat-time">8:20 a.m.</p>
                                </div>
                            </div>
                        </div>
                        <div class="slimScrollBar" style="background: rgb(0, 0, 0); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;"></div>
                        <div class="slimScrollRail" style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div>
                    </div>
                    <div class="chat-reply-box">
                        <div class="right-icon-control">
                            <div class="input-group input-group-button">
                                <input type="text" class="form-control" placeholder="Write hear . . " />
                                <div class="input-group-append">
                                    <button class="btn btn-primary waves-effect waves-light" type="button"><i class="feather icon-message-circle"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pcoded-main-container" style="margin-top: 73px;">
                    <div class="pcoded-wrapper">
                        <nav class="pcoded-navbar" style="display:none!Important;" navbar-theme="theme1" active-item-theme="theme1" sub-item-theme="theme2" active-item-style="style0" pcoded-navbar-position="fixed">
                            <div class="nav-list">
                                <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: 100%; height: 100%;">
                                    <div class="pcoded-inner-navbar main-menu" style="overflow: hidden; width: 100%; height: 100%;">
                                        <div class="pcoded-navigation-label" menu-title-theme="theme1">Navigation</div>
                                        <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="solid" subitem-border="false">
                                            <li class="pcoded-hasmenu active" dropdown-icon="style1" subitem-icon="style1">
                                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon"><i class="feather icon-home"></i></span>
                                                    <span class="pcoded-mtext">Dashboard</span>
                                                </a>
                                                <ul class="pcoded-submenu" style="display: none;">
                                                    <li class="active">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Default</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">CRM</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Analytics</span>
                                                            <span class="pcoded-badge label label-info">NEW</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon"><i class="feather icon-sidebar"></i></span>
                                                    <span class="pcoded-mtext">Page layouts</span>
                                                    <span class="pcoded-badge label label-warning">NEW</span>
                                                </a>
                                                <ul class="pcoded-submenu">
                                                    <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                                        <a href="javascript:void(0)" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Vertical</span>
                                                        </a>
                                                        <ul class="pcoded-submenu">
                                                            <li class="">
                                                                <a href="#" class="waves-effect waves-dark">
                                                                    <span class="pcoded-mtext">Static Layout</span>
                                                                </a>
                                                            </li>
                                                            <li class="">
                                                                <a href="#" class="waves-effect waves-dark">
                                                                    <span class="pcoded-mtext">Header Fixed</span>
                                                                </a>
                                                            </li>
                                                            <li class="">
                                                                <a href="#" class="waves-effect waves-dark">
                                                                    <span class="pcoded-mtext">Compact</span>
                                                                </a>
                                                            </li>
                                                            <li class="">
                                                                <a href="#" class="waves-effect waves-dark">
                                                                    <span class="pcoded-mtext">Sidebar Fixed</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                                        <a href="javascript:void(0)" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Horizontal</span>
                                                        </a>
                                                        <ul class="pcoded-submenu">
                                                            <li class="">
                                                                <a href="#" target="_blank" class="waves-effect waves-dark">
                                                                    <span class="pcoded-mtext">Static Layout</span>
                                                                </a>
                                                            </li>
                                                            <li class="">
                                                                <a href="#" target="_blank" class="waves-effect waves-dark">
                                                                    <span class="pcoded-mtext">Fixed layout</span>
                                                                </a>
                                                            </li>
                                                            <li class="">
                                                                <a href="#" target="_blank" class="waves-effect waves-dark">
                                                                    <span class="pcoded-mtext">Static With Icon</span>
                                                                </a>
                                                            </li>
                                                            <li class="">
                                                                <a href="#" target="_blank" class="waves-effect waves-dark">
                                                                    <span class="pcoded-mtext">Fixed With Icon</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Bottom Menu</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="">
                                                <a href="#" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-menu"></i>
                                                    </span>
                                                    <span class="pcoded-mtext">Navigation</span>
                                                </a>
                                            </li>
                                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-layers"></i>
                                                    </span>
                                                    <span class="pcoded-mtext">Widget</span>
                                                    <span class="pcoded-badge label label-danger">100+</span>
                                                </a>
                                                <ul class="pcoded-submenu">
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Statistic</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Data</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Chart Widget</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div class="pcoded-navigation-label" menu-title-theme="theme1">UI Element</div>
                                        <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="solid" subitem-border="false">
                                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-box"></i>
                                                    </span>
                                                    <span class="pcoded-mtext">Basic</span>
                                                </a>
                                                <ul class="pcoded-submenu">
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Alert</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Breadcrumbs</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Button</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Box-Shadow</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Accordion</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Generic Class</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Tabs</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Color</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Label Badge</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Progress Bar</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">List</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Tooltip And Popover</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Typography</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Other</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-gitlab"></i>
                                                    </span>
                                                    <span class="pcoded-mtext">Advance</span>
                                                </a>
                                                <ul class="pcoded-submenu">
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Draggable</span>
                                                        </a>
                                                    </li>

                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Modal</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Notifications</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Rating</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Range Slider</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Slider</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Syntax Highlighter</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Tour</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Tree View</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Nestable</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Toolbar</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-package"></i>
                                                    </span>
                                                    <span class="pcoded-mtext">Extra</span>
                                                </a>
                                                <ul class="pcoded-submenu">
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Session Timeout</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Session Idle Timeout</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Offline</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="">
                                                <a href="#" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-aperture rotate-refresh"></i>
                                                    </span>
                                                    <span class="pcoded-mtext">Animations</span>
                                                </a>
                                            </li>
                                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-command"></i>
                                                    </span>
                                                    <span class="pcoded-mtext">Icons</span>
                                                </a>
                                                <ul class="pcoded-submenu">
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Font Awesome</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Themify</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Simple Line Icon</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div class="pcoded-navigation-label" menu-title-theme="theme1">Forms</div>
                                        <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="solid" subitem-border="false">
                                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-clipboard"></i>
                                                    </span>
                                                    <span class="pcoded-mtext">Form</span>
                                                </a>
                                                <ul class="pcoded-submenu">
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Components</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Add-On</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Advance</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Validation</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="">
                                                <a href="#" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-edit-1"></i>
                                                    </span>
                                                    <span class="pcoded-mtext">Form Picker</span>
                                                    <span class="pcoded-badge label label-warning">NEW</span>
                                                </a>
                                            </li>
                                            <li class="">
                                                <a href="#" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-feather"></i>
                                                    </span>
                                                    <span class="pcoded-mtext">Form Select</span>
                                                </a>
                                            </li>
                                            <li class="">
                                                <a href="#" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-shield"></i>
                                                    </span>
                                                    <span class="pcoded-mtext">Form Masking</span>
                                                </a>
                                            </li>
                                            <li class="">
                                                <a href="#" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-tv"></i>
                                                    </span>
                                                    <span class="pcoded-mtext">Form Wizard</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div class="pcoded-navigation-label" menu-title-theme="theme1">Tables</div>
                                        <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="solid" subitem-border="false">
                                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-credit-card"></i>
                                                    </span>
                                                    <span class="pcoded-mtext">Bootstrap Table</span>
                                                </a>
                                                <ul class="pcoded-submenu">
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Basic Table</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Sizing Table</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Border Table</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Styling Table</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-inbox"></i>
                                                    </span>
                                                    <span class="pcoded-mtext">Data Table</span>
                                                </a>
                                                <ul class="pcoded-submenu">
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Basic Initialization</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Advance Initialization</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Styling</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">API</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Ajax</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Server Side</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Plug-In</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Data Sources</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-server"></i>
                                                    </span>
                                                    <span class="pcoded-mtext">DT Extensions</span>
                                                </a>
                                                <ul class="pcoded-submenu">
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">AutoFill</span>
                                                        </a>
                                                    </li>
                                                    <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                                        <a href="javascript:void(0)" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Button</span>
                                                        </a>
                                                        <ul class="pcoded-submenu">
                                                            <li class="">
                                                                <a href="#" class="waves-effect waves-dark">
                                                                    <span class="pcoded-mtext">Basic Button</span>
                                                                </a>
                                                            </li>
                                                            <li class="">
                                                                <a href="#" class="waves-effect waves-dark">
                                                                    <span class="pcoded-mtext">Data Export</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Col Reorder</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Fixed Columns</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Fixed Header</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Key Table</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Responsive</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Row Reorder</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Scroller</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Select Table</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="">
                                                <a href="#" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-hash"></i>
                                                    </span>
                                                    <span class="pcoded-mtext">FooTable</span>
                                                </a>
                                            </li>
                                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-airplay"></i>
                                                    </span>
                                                    <span class="pcoded-mtext">Handson Table</span>
                                                </a>
                                                <ul class="pcoded-submenu">
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Appearance</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Data Operation</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Rows Columns</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Columns Only</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Cell Features</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Cell Types</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Integrations</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Rows Only</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Utilities</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="">
                                                <a href="#" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-edit"></i>
                                                    </span>
                                                    <span class="pcoded-mtext">Editable Table</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div class="pcoded-navigation-label" menu-title-theme="theme1">Chart And Maps</div>
                                        <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="solid" subitem-border="false">
                                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-pie-chart"></i>
                                                    </span>
                                                    <span class="pcoded-mtext">Charts</span>
                                                </a>
                                                <ul class="pcoded-submenu">
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Google Chart</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">ChartJs</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">List Chart</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Float Chart</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Knob chart</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Morris Chart</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Nvd3 Chart</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Peity Chart</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Radial Chart</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Rickshaw Chart</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Sparkline Chart</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">C3 Chart</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-map"></i>
                                                    </span>
                                                    <span class="pcoded-mtext">Maps</span>
                                                </a>
                                                <ul class="pcoded-submenu">
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Google Maps</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Vector Maps</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Google Map Search API</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Location</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div class="pcoded-navigation-label" menu-title-theme="theme1">Pages</div>
                                        <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="solid" subitem-border="false">
                                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-unlock"></i>
                                                    </span>
                                                    <span class="pcoded-mtext">Authentication</span>
                                                </a>
                                                <ul class="pcoded-submenu">
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Login</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Registration</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" target="_blank" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Forgot Password</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" target="_blank" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Lock Screen</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-sliders"></i>
                                                    </span>
                                                    <span class="pcoded-mtext">Maintenance</span>
                                                </a>
                                                <ul class="pcoded-submenu">
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Error</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Comming Soon</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Offline UI</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-mail"></i>
                                                    </span>
                                                    <span class="pcoded-mtext">Email</span>
                                                </a>
                                                <ul class="pcoded-submenu">
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Compose Email</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Inbox</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Read Mail</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div class="pcoded-navigation-label" menu-title-theme="theme1">App</div>
                                        <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="solid" subitem-border="false">
                                            <li class="">
                                                <a href="#" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-bookmark"></i>
                                                    </span>
                                                    <span class="pcoded-mtext">To-Do</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div class="pcoded-navigation-label" menu-title-theme="theme1">Extension</div>
                                        <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="solid" subitem-border="false">
                                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-file-plus"></i>
                                                    </span>
                                                    <span class="pcoded-mtext">Editor</span>
                                                </a>
                                                <ul class="pcoded-submenu">
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">CK-Editor</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">WYSIWYG Editor</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-calendar"></i>
                                                    </span>
                                                    <span class="pcoded-mtext">Event Calendar</span>
                                                </a>
                                                <ul class="pcoded-submenu">
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Full Calendar</span>
                                                        </a>
                                                    </li>
                                                    <li class="">
                                                        <a href="#" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">CLNDER</span>
                                                            <span class="pcoded-badge label label-info">NEW</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="">
                                                <a href="#" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-scissors"></i>
                                                        <b>IC</b>
                                                    </span>
                                                    <span class="pcoded-mtext">Image Cropper</span>
                                                </a>
                                            </li>
                                            <li class="">
                                                <a href="#" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-upload-cloud"></i>
                                                    </span>
                                                    <span class="pcoded-mtext">File Upload</span>
                                                </a>
                                            </li>
                                            <li class="">
                                                <a href="#" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-briefcase"></i>
                                                    </span>
                                                    <span class="pcoded-mtext">Change Loges</span>
                                                    <span class="pcoded-badge label label-warning">1.0</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div class="pcoded-navigation-label" menu-title-theme="theme1">Other</div>
                                        <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="solid" subitem-border="false">
                                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-list"></i>
                                                    </span>
                                                    <span class="pcoded-mtext">Menu Levels</span>
                                                </a>
                                                <ul class="pcoded-submenu">
                                                    <li class="">
                                                        <a href="javascript:void(0)" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Menu Level 2.1</span>
                                                        </a>
                                                    </li>
                                                    <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                                        <a href="javascript:void(0)" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Menu Level 2.2</span>
                                                        </a>
                                                        <ul class="pcoded-submenu">
                                                            <li class="">
                                                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                                                    <span class="pcoded-mtext">Menu Level 3.1</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="">
                                                        <a href="javascript:void(0)" class="waves-effect waves-dark">
                                                            <span class="pcoded-mtext">Menu Level 2.3</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="">
                                                <a href="javascript:void(0)" class="disabled waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-power"></i>
                                                        <b>D</b>
                                                    </span>
                                                    <span class="pcoded-mtext">Disabled Menu</span>
                                                </a>
                                            </li>
                                            <li class="">
                                                <a href="#" class="waves-effect waves-dark">
                                                    <span class="pcoded-micon">
                                                        <i class="feather icon-watch"></i>
                                                    </span>
                                                    <span class="pcoded-mtext">Sample Page</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="slimScrollBar" style="background: rgb(0, 0, 0); width: 5px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px; height: 124.873px;"></div>
                                    <div class="slimScrollRail" style="width: 5px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div>
                                </div>
                            </div>
                        </nav>

                        <div class="pcoded-content" style="margin-left:0px!important;">
                            <div class="page-header card">
                                <div class="row align-items-end">
                                    <div class="col-lg-8">
                                        <div class="page-header-title">
                                            <i class="feather icon-home bg-c-blue"></i>
                                            <div class="d-inline">
                                                <h5>Dashboard</h5>
                                                <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="page-header-breadcrumb">
                                            <ul class="breadcrumb breadcrumb-title">
                                                <li class="breadcrumb-item">
                                                    <a href="#"><i class="feather icon-home"></i></a>
                                                </li>
                                                <li class="breadcrumb-item"><a href="#!">Dashboard</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="pcoded-inner-content">
                                <div class="main-body">
                                    <div class="page-wrapper">
                                        <div class="page-body">
                                            <div class="row">
                                                <div class="col-md-12 col-xl-8">
                                                    <div class="card sale-card">
                                                        <div class="card-header">
                                                            <h5>Deals Analyticssss</h5>
                                                        </div>
                                                        <div class="card-block">
                                                            <div id="sales-analytics" class="chart-shadow" style="height: 380px; overflow: hidden; text-align: left;"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Summary/>
                                                <ProjectProgressSummary/>
                                                

                                                

                                                <div class="col-md-12 col-xl-4">
                                                    <div class="card card-blue text-white">
                                                        <div class="card-block p-b-0">
                                                            <div class="row m-b-50">
                                                                <div class="col">
                                                                    <h6 class="m-b-5">Sales In July</h6>
                                                                    <h5 class="m-b-0 f-w-700">$2665.00</h5>
                                                                </div>
                                                                <div class="col-auto text-center">
                                                                    <p class="m-b-5">Direct Sale</p>
                                                                    <h6 class="m-b-0">$1768</h6>
                                                                </div>
                                                                <div class="col-auto text-center">
                                                                    <p class="m-b-5">Referal</p>
                                                                    <h6 class="m-b-0">$897</h6>
                                                                </div>
                                                            </div>
                                                            <div id="sec-ecommerce-chart-line" class="" style="height: 60px; padding: 0px; position: relative;">
                                                                <canvas class="flot-base" width="367" height="60" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 367px; height: 60px;"></canvas>
                                                                <div class="flot-text" style="position: absolute; inset: 0px; font-size: smaller; color: rgb(84, 84, 84);">
                                                                    <div class="flot-x-axis flot-x1-axis xAxis x1Axis" style="position: absolute; inset: 0px;">
                                                                        <div style="position: absolute; max-width: 52px; top: 60px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 8px; text-align: center;">0.0</div>
                                                                        <div style="position: absolute; max-width: 52px; top: 60px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 71px; text-align: center;">2.5</div>
                                                                        <div style="position: absolute; max-width: 52px; top: 60px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 133px; text-align: center;">5.0</div>
                                                                        <div style="position: absolute; max-width: 52px; top: 60px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 196px; text-align: center;">7.5</div>
                                                                        <div style="position: absolute; max-width: 52px; top: 60px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 259px; text-align: center;">
                                                                            10.0
                                                                        </div>
                                                                        <div style="position: absolute; max-width: 52px; top: 60px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 321px; text-align: center;">
                                                                            12.5
                                                                        </div>
                                                                    </div>
                                                                    <div class="flot-y-axis flot-y1-axis yAxis y1Axis" style="position: absolute; inset: 0px;">
                                                                        <div style="position: absolute; top: 52px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">0</div>
                                                                        <div style="position: absolute; top: 37px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">10</div>
                                                                        <div style="position: absolute; top: 23px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">20</div>
                                                                        <div style="position: absolute; top: 8px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">30</div>
                                                                    </div>
                                                                </div>
                                                                <canvas class="flot-overlay" width="367" height="60" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 367px; height: 60px;"></canvas>
                                                            </div>
                                                            <div id="sec-ecommerce-chart-bar" style="height: 195px; padding: 0px; position: relative;">
                                                                <canvas class="flot-base" width="367" height="195" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 367px; height: 195px;"></canvas>
                                                                <div class="flot-text" style="position: absolute; inset: 0px; font-size: smaller; color: rgb(84, 84, 84);">
                                                                    <div class="flot-x-axis flot-x1-axis xAxis x1Axis" style="position: absolute; inset: 0px;">
                                                                        <div style="position: absolute; max-width: 45px; top: 195px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 8px; text-align: center;">0.0</div>
                                                                        <div style="position: absolute; max-width: 45px; top: 195px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 70px; text-align: center;">2.5</div>
                                                                        <div style="position: absolute; max-width: 45px; top: 195px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 133px; text-align: center;">
                                                                            5.0
                                                                        </div>
                                                                        <div style="position: absolute; max-width: 45px; top: 195px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 196px; text-align: center;">
                                                                            7.5
                                                                        </div>
                                                                        <div style="position: absolute; max-width: 45px; top: 195px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 259px; text-align: center;">
                                                                            10.0
                                                                        </div>
                                                                        <div style="position: absolute; max-width: 45px; top: 195px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 322px; text-align: center;">
                                                                            12.5
                                                                        </div>
                                                                    </div>
                                                                    <div class="flot-y-axis flot-y1-axis yAxis y1Axis" style="position: absolute; inset: 0px;">
                                                                        <div style="position: absolute; top: 195px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">0</div>
                                                                        <div style="position: absolute; top: 163px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">5</div>
                                                                        <div style="position: absolute; top: 130px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">10</div>
                                                                        <div style="position: absolute; top: 98px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">15</div>
                                                                        <div style="position: absolute; top: 65px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">20</div>
                                                                        <div style="position: absolute; top: 33px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">25</div>
                                                                        <div style="position: absolute; top: 0px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">30</div>
                                                                    </div>
                                                                </div>
                                                                <canvas class="flot-overlay" width="367" height="195" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 367px; height: 195px;"></canvas>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <WhatsNew/>
                                                
                                                <LatestActivity/>

                                                <NewProducts/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="styleSelector"></div>
                    </div>
                </div>
            </div>
        </div>
    `,
};
