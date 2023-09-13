'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-basic-hoidanit documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-97c71f258c60019e8567a0d1d956f3e66066a074271139097d50f8a07f3613933f50e0af8be7f9125f5256e4af52d19bc2ae755c4ce2a93d079d14138a8f39a0"' : 'data-bs-target="#xs-controllers-links-module-AppModule-97c71f258c60019e8567a0d1d956f3e66066a074271139097d50f8a07f3613933f50e0af8be7f9125f5256e4af52d19bc2ae755c4ce2a93d079d14138a8f39a0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-97c71f258c60019e8567a0d1d956f3e66066a074271139097d50f8a07f3613933f50e0af8be7f9125f5256e4af52d19bc2ae755c4ce2a93d079d14138a8f39a0"' :
                                            'id="xs-controllers-links-module-AppModule-97c71f258c60019e8567a0d1d956f3e66066a074271139097d50f8a07f3613933f50e0af8be7f9125f5256e4af52d19bc2ae755c4ce2a93d079d14138a8f39a0"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-97c71f258c60019e8567a0d1d956f3e66066a074271139097d50f8a07f3613933f50e0af8be7f9125f5256e4af52d19bc2ae755c4ce2a93d079d14138a8f39a0"' : 'data-bs-target="#xs-injectables-links-module-AppModule-97c71f258c60019e8567a0d1d956f3e66066a074271139097d50f8a07f3613933f50e0af8be7f9125f5256e4af52d19bc2ae755c4ce2a93d079d14138a8f39a0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-97c71f258c60019e8567a0d1d956f3e66066a074271139097d50f8a07f3613933f50e0af8be7f9125f5256e4af52d19bc2ae755c4ce2a93d079d14138a8f39a0"' :
                                        'id="xs-injectables-links-module-AppModule-97c71f258c60019e8567a0d1d956f3e66066a074271139097d50f8a07f3613933f50e0af8be7f9125f5256e4af52d19bc2ae755c4ce2a93d079d14138a8f39a0"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-baa7b40aab4539b866025665499647590b591989c26ff145ef20fc232832621109c99907d0919b27d260b7f40b0a4e3c0305381999f30c4b327e98c76f8641c8"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-baa7b40aab4539b866025665499647590b591989c26ff145ef20fc232832621109c99907d0919b27d260b7f40b0a4e3c0305381999f30c4b327e98c76f8641c8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-baa7b40aab4539b866025665499647590b591989c26ff145ef20fc232832621109c99907d0919b27d260b7f40b0a4e3c0305381999f30c4b327e98c76f8641c8"' :
                                            'id="xs-controllers-links-module-AuthModule-baa7b40aab4539b866025665499647590b591989c26ff145ef20fc232832621109c99907d0919b27d260b7f40b0a4e3c0305381999f30c4b327e98c76f8641c8"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-baa7b40aab4539b866025665499647590b591989c26ff145ef20fc232832621109c99907d0919b27d260b7f40b0a4e3c0305381999f30c4b327e98c76f8641c8"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-baa7b40aab4539b866025665499647590b591989c26ff145ef20fc232832621109c99907d0919b27d260b7f40b0a4e3c0305381999f30c4b327e98c76f8641c8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-baa7b40aab4539b866025665499647590b591989c26ff145ef20fc232832621109c99907d0919b27d260b7f40b0a4e3c0305381999f30c4b327e98c76f8641c8"' :
                                        'id="xs-injectables-links-module-AuthModule-baa7b40aab4539b866025665499647590b591989c26ff145ef20fc232832621109c99907d0919b27d260b7f40b0a4e3c0305381999f30c4b327e98c76f8641c8"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CompaniesModule.html" data-type="entity-link" >CompaniesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CompaniesModule-ed434044850a88294a4dd68d3b154c75823afe81458bcb228ae7fd33cec834506986400598daef1dfcf665000cd478f3f28b004c9cd9ce66a7a6f79da553e8ff"' : 'data-bs-target="#xs-controllers-links-module-CompaniesModule-ed434044850a88294a4dd68d3b154c75823afe81458bcb228ae7fd33cec834506986400598daef1dfcf665000cd478f3f28b004c9cd9ce66a7a6f79da553e8ff"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CompaniesModule-ed434044850a88294a4dd68d3b154c75823afe81458bcb228ae7fd33cec834506986400598daef1dfcf665000cd478f3f28b004c9cd9ce66a7a6f79da553e8ff"' :
                                            'id="xs-controllers-links-module-CompaniesModule-ed434044850a88294a4dd68d3b154c75823afe81458bcb228ae7fd33cec834506986400598daef1dfcf665000cd478f3f28b004c9cd9ce66a7a6f79da553e8ff"' }>
                                            <li class="link">
                                                <a href="controllers/CompaniesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompaniesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CompaniesModule-ed434044850a88294a4dd68d3b154c75823afe81458bcb228ae7fd33cec834506986400598daef1dfcf665000cd478f3f28b004c9cd9ce66a7a6f79da553e8ff"' : 'data-bs-target="#xs-injectables-links-module-CompaniesModule-ed434044850a88294a4dd68d3b154c75823afe81458bcb228ae7fd33cec834506986400598daef1dfcf665000cd478f3f28b004c9cd9ce66a7a6f79da553e8ff"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CompaniesModule-ed434044850a88294a4dd68d3b154c75823afe81458bcb228ae7fd33cec834506986400598daef1dfcf665000cd478f3f28b004c9cd9ce66a7a6f79da553e8ff"' :
                                        'id="xs-injectables-links-module-CompaniesModule-ed434044850a88294a4dd68d3b154c75823afe81458bcb228ae7fd33cec834506986400598daef1dfcf665000cd478f3f28b004c9cd9ce66a7a6f79da553e8ff"' }>
                                        <li class="link">
                                            <a href="injectables/CompaniesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompaniesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabasesModule.html" data-type="entity-link" >DatabasesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DatabasesModule-c38b107aa341bd1360637a708b6d1de88073a26bd5f223bc0e9a21be67fff016bf940030392a279ef712d447ebba21a8ad1b3fe4db398948c98421d314c3e188"' : 'data-bs-target="#xs-controllers-links-module-DatabasesModule-c38b107aa341bd1360637a708b6d1de88073a26bd5f223bc0e9a21be67fff016bf940030392a279ef712d447ebba21a8ad1b3fe4db398948c98421d314c3e188"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DatabasesModule-c38b107aa341bd1360637a708b6d1de88073a26bd5f223bc0e9a21be67fff016bf940030392a279ef712d447ebba21a8ad1b3fe4db398948c98421d314c3e188"' :
                                            'id="xs-controllers-links-module-DatabasesModule-c38b107aa341bd1360637a708b6d1de88073a26bd5f223bc0e9a21be67fff016bf940030392a279ef712d447ebba21a8ad1b3fe4db398948c98421d314c3e188"' }>
                                            <li class="link">
                                                <a href="controllers/DatabasesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabasesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DatabasesModule-c38b107aa341bd1360637a708b6d1de88073a26bd5f223bc0e9a21be67fff016bf940030392a279ef712d447ebba21a8ad1b3fe4db398948c98421d314c3e188"' : 'data-bs-target="#xs-injectables-links-module-DatabasesModule-c38b107aa341bd1360637a708b6d1de88073a26bd5f223bc0e9a21be67fff016bf940030392a279ef712d447ebba21a8ad1b3fe4db398948c98421d314c3e188"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatabasesModule-c38b107aa341bd1360637a708b6d1de88073a26bd5f223bc0e9a21be67fff016bf940030392a279ef712d447ebba21a8ad1b3fe4db398948c98421d314c3e188"' :
                                        'id="xs-injectables-links-module-DatabasesModule-c38b107aa341bd1360637a708b6d1de88073a26bd5f223bc0e9a21be67fff016bf940030392a279ef712d447ebba21a8ad1b3fe4db398948c98421d314c3e188"' }>
                                        <li class="link">
                                            <a href="injectables/DatabasesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabasesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilesModule.html" data-type="entity-link" >FilesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FilesModule-c69b99e112fa50e50ca7efde0a27091aac175538a706f88a276d4642699402c56b211f983dd59dd0a3825c04bc7c19942d1fc34ea4fae4e7ba5cbda12462922e"' : 'data-bs-target="#xs-controllers-links-module-FilesModule-c69b99e112fa50e50ca7efde0a27091aac175538a706f88a276d4642699402c56b211f983dd59dd0a3825c04bc7c19942d1fc34ea4fae4e7ba5cbda12462922e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FilesModule-c69b99e112fa50e50ca7efde0a27091aac175538a706f88a276d4642699402c56b211f983dd59dd0a3825c04bc7c19942d1fc34ea4fae4e7ba5cbda12462922e"' :
                                            'id="xs-controllers-links-module-FilesModule-c69b99e112fa50e50ca7efde0a27091aac175538a706f88a276d4642699402c56b211f983dd59dd0a3825c04bc7c19942d1fc34ea4fae4e7ba5cbda12462922e"' }>
                                            <li class="link">
                                                <a href="controllers/FilesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FilesModule-c69b99e112fa50e50ca7efde0a27091aac175538a706f88a276d4642699402c56b211f983dd59dd0a3825c04bc7c19942d1fc34ea4fae4e7ba5cbda12462922e"' : 'data-bs-target="#xs-injectables-links-module-FilesModule-c69b99e112fa50e50ca7efde0a27091aac175538a706f88a276d4642699402c56b211f983dd59dd0a3825c04bc7c19942d1fc34ea4fae4e7ba5cbda12462922e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FilesModule-c69b99e112fa50e50ca7efde0a27091aac175538a706f88a276d4642699402c56b211f983dd59dd0a3825c04bc7c19942d1fc34ea4fae4e7ba5cbda12462922e"' :
                                        'id="xs-injectables-links-module-FilesModule-c69b99e112fa50e50ca7efde0a27091aac175538a706f88a276d4642699402c56b211f983dd59dd0a3825c04bc7c19942d1fc34ea4fae4e7ba5cbda12462922e"' }>
                                        <li class="link">
                                            <a href="injectables/FilesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-HealthModule-079a03d7202b7ba07f1159ea69edd3488e20ab353f7708b206d290cd4468a6d1288b71108faf245b2a04773b825a39f3b05b7833046e6f685b569e696d84a0b0"' : 'data-bs-target="#xs-controllers-links-module-HealthModule-079a03d7202b7ba07f1159ea69edd3488e20ab353f7708b206d290cd4468a6d1288b71108faf245b2a04773b825a39f3b05b7833046e6f685b569e696d84a0b0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-079a03d7202b7ba07f1159ea69edd3488e20ab353f7708b206d290cd4468a6d1288b71108faf245b2a04773b825a39f3b05b7833046e6f685b569e696d84a0b0"' :
                                            'id="xs-controllers-links-module-HealthModule-079a03d7202b7ba07f1159ea69edd3488e20ab353f7708b206d290cd4468a6d1288b71108faf245b2a04773b825a39f3b05b7833046e6f685b569e696d84a0b0"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JobsModule.html" data-type="entity-link" >JobsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-JobsModule-ad9655261e94348e062217d6f51796b02f8ac8011650b62f7569af6e7ef295ccf9fe3519d194093a838f737e7c9d0beef58d6bd46bd0d50339eb6eddc6bdc9e5"' : 'data-bs-target="#xs-controllers-links-module-JobsModule-ad9655261e94348e062217d6f51796b02f8ac8011650b62f7569af6e7ef295ccf9fe3519d194093a838f737e7c9d0beef58d6bd46bd0d50339eb6eddc6bdc9e5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-JobsModule-ad9655261e94348e062217d6f51796b02f8ac8011650b62f7569af6e7ef295ccf9fe3519d194093a838f737e7c9d0beef58d6bd46bd0d50339eb6eddc6bdc9e5"' :
                                            'id="xs-controllers-links-module-JobsModule-ad9655261e94348e062217d6f51796b02f8ac8011650b62f7569af6e7ef295ccf9fe3519d194093a838f737e7c9d0beef58d6bd46bd0d50339eb6eddc6bdc9e5"' }>
                                            <li class="link">
                                                <a href="controllers/JobsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-JobsModule-ad9655261e94348e062217d6f51796b02f8ac8011650b62f7569af6e7ef295ccf9fe3519d194093a838f737e7c9d0beef58d6bd46bd0d50339eb6eddc6bdc9e5"' : 'data-bs-target="#xs-injectables-links-module-JobsModule-ad9655261e94348e062217d6f51796b02f8ac8011650b62f7569af6e7ef295ccf9fe3519d194093a838f737e7c9d0beef58d6bd46bd0d50339eb6eddc6bdc9e5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JobsModule-ad9655261e94348e062217d6f51796b02f8ac8011650b62f7569af6e7ef295ccf9fe3519d194093a838f737e7c9d0beef58d6bd46bd0d50339eb6eddc6bdc9e5"' :
                                        'id="xs-injectables-links-module-JobsModule-ad9655261e94348e062217d6f51796b02f8ac8011650b62f7569af6e7ef295ccf9fe3519d194093a838f737e7c9d0beef58d6bd46bd0d50339eb6eddc6bdc9e5"' }>
                                        <li class="link">
                                            <a href="injectables/JobsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MailModule.html" data-type="entity-link" >MailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MailModule-dc653d362fb65ab126f704ad5b012733a419fea83c9395096465e69d3f5569a6b920fbb35f7d435c0c8db88af1ca88ab29dbe71103076d3053acbfc9e5325bb7"' : 'data-bs-target="#xs-controllers-links-module-MailModule-dc653d362fb65ab126f704ad5b012733a419fea83c9395096465e69d3f5569a6b920fbb35f7d435c0c8db88af1ca88ab29dbe71103076d3053acbfc9e5325bb7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MailModule-dc653d362fb65ab126f704ad5b012733a419fea83c9395096465e69d3f5569a6b920fbb35f7d435c0c8db88af1ca88ab29dbe71103076d3053acbfc9e5325bb7"' :
                                            'id="xs-controllers-links-module-MailModule-dc653d362fb65ab126f704ad5b012733a419fea83c9395096465e69d3f5569a6b920fbb35f7d435c0c8db88af1ca88ab29dbe71103076d3053acbfc9e5325bb7"' }>
                                            <li class="link">
                                                <a href="controllers/MailController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MailModule-dc653d362fb65ab126f704ad5b012733a419fea83c9395096465e69d3f5569a6b920fbb35f7d435c0c8db88af1ca88ab29dbe71103076d3053acbfc9e5325bb7"' : 'data-bs-target="#xs-injectables-links-module-MailModule-dc653d362fb65ab126f704ad5b012733a419fea83c9395096465e69d3f5569a6b920fbb35f7d435c0c8db88af1ca88ab29dbe71103076d3053acbfc9e5325bb7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MailModule-dc653d362fb65ab126f704ad5b012733a419fea83c9395096465e69d3f5569a6b920fbb35f7d435c0c8db88af1ca88ab29dbe71103076d3053acbfc9e5325bb7"' :
                                        'id="xs-injectables-links-module-MailModule-dc653d362fb65ab126f704ad5b012733a419fea83c9395096465e69d3f5569a6b920fbb35f7d435c0c8db88af1ca88ab29dbe71103076d3053acbfc9e5325bb7"' }>
                                        <li class="link">
                                            <a href="injectables/MailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PermissionsModule.html" data-type="entity-link" >PermissionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PermissionsModule-3beeabd309dcf725b362502eb5dbdb49f0f5652a0d60f6bc58f1c14f3a045c9950b9549ea3234c09130df9d3fa01ccd456f43293f2d4233daed3cba86fe7f51a"' : 'data-bs-target="#xs-controllers-links-module-PermissionsModule-3beeabd309dcf725b362502eb5dbdb49f0f5652a0d60f6bc58f1c14f3a045c9950b9549ea3234c09130df9d3fa01ccd456f43293f2d4233daed3cba86fe7f51a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PermissionsModule-3beeabd309dcf725b362502eb5dbdb49f0f5652a0d60f6bc58f1c14f3a045c9950b9549ea3234c09130df9d3fa01ccd456f43293f2d4233daed3cba86fe7f51a"' :
                                            'id="xs-controllers-links-module-PermissionsModule-3beeabd309dcf725b362502eb5dbdb49f0f5652a0d60f6bc58f1c14f3a045c9950b9549ea3234c09130df9d3fa01ccd456f43293f2d4233daed3cba86fe7f51a"' }>
                                            <li class="link">
                                                <a href="controllers/PermissionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PermissionsModule-3beeabd309dcf725b362502eb5dbdb49f0f5652a0d60f6bc58f1c14f3a045c9950b9549ea3234c09130df9d3fa01ccd456f43293f2d4233daed3cba86fe7f51a"' : 'data-bs-target="#xs-injectables-links-module-PermissionsModule-3beeabd309dcf725b362502eb5dbdb49f0f5652a0d60f6bc58f1c14f3a045c9950b9549ea3234c09130df9d3fa01ccd456f43293f2d4233daed3cba86fe7f51a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PermissionsModule-3beeabd309dcf725b362502eb5dbdb49f0f5652a0d60f6bc58f1c14f3a045c9950b9549ea3234c09130df9d3fa01ccd456f43293f2d4233daed3cba86fe7f51a"' :
                                        'id="xs-injectables-links-module-PermissionsModule-3beeabd309dcf725b362502eb5dbdb49f0f5652a0d60f6bc58f1c14f3a045c9950b9549ea3234c09130df9d3fa01ccd456f43293f2d4233daed3cba86fe7f51a"' }>
                                        <li class="link">
                                            <a href="injectables/PermissionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResumesModule.html" data-type="entity-link" >ResumesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ResumesModule-eb956a2502cb4695890b8a1668b616ab014f2b7c5d36e8e249f3050b47555d5726f3bce7794cb5a6cd9f058d16aa7f4b7e5b7097d4580294491d0321c3a35c34"' : 'data-bs-target="#xs-controllers-links-module-ResumesModule-eb956a2502cb4695890b8a1668b616ab014f2b7c5d36e8e249f3050b47555d5726f3bce7794cb5a6cd9f058d16aa7f4b7e5b7097d4580294491d0321c3a35c34"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ResumesModule-eb956a2502cb4695890b8a1668b616ab014f2b7c5d36e8e249f3050b47555d5726f3bce7794cb5a6cd9f058d16aa7f4b7e5b7097d4580294491d0321c3a35c34"' :
                                            'id="xs-controllers-links-module-ResumesModule-eb956a2502cb4695890b8a1668b616ab014f2b7c5d36e8e249f3050b47555d5726f3bce7794cb5a6cd9f058d16aa7f4b7e5b7097d4580294491d0321c3a35c34"' }>
                                            <li class="link">
                                                <a href="controllers/ResumesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ResumesModule-eb956a2502cb4695890b8a1668b616ab014f2b7c5d36e8e249f3050b47555d5726f3bce7794cb5a6cd9f058d16aa7f4b7e5b7097d4580294491d0321c3a35c34"' : 'data-bs-target="#xs-injectables-links-module-ResumesModule-eb956a2502cb4695890b8a1668b616ab014f2b7c5d36e8e249f3050b47555d5726f3bce7794cb5a6cd9f058d16aa7f4b7e5b7097d4580294491d0321c3a35c34"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ResumesModule-eb956a2502cb4695890b8a1668b616ab014f2b7c5d36e8e249f3050b47555d5726f3bce7794cb5a6cd9f058d16aa7f4b7e5b7097d4580294491d0321c3a35c34"' :
                                        'id="xs-injectables-links-module-ResumesModule-eb956a2502cb4695890b8a1668b616ab014f2b7c5d36e8e249f3050b47555d5726f3bce7794cb5a6cd9f058d16aa7f4b7e5b7097d4580294491d0321c3a35c34"' }>
                                        <li class="link">
                                            <a href="injectables/ResumesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RolesModule.html" data-type="entity-link" >RolesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RolesModule-48388bdfe390bfa779c20e072c2eda393ebb142f371de8b1fced0513de9d32e364c0c2fb3e8de3e5302b1d4cf5cca9982a9041bb6a20c8623cb32be0d0e16909"' : 'data-bs-target="#xs-controllers-links-module-RolesModule-48388bdfe390bfa779c20e072c2eda393ebb142f371de8b1fced0513de9d32e364c0c2fb3e8de3e5302b1d4cf5cca9982a9041bb6a20c8623cb32be0d0e16909"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RolesModule-48388bdfe390bfa779c20e072c2eda393ebb142f371de8b1fced0513de9d32e364c0c2fb3e8de3e5302b1d4cf5cca9982a9041bb6a20c8623cb32be0d0e16909"' :
                                            'id="xs-controllers-links-module-RolesModule-48388bdfe390bfa779c20e072c2eda393ebb142f371de8b1fced0513de9d32e364c0c2fb3e8de3e5302b1d4cf5cca9982a9041bb6a20c8623cb32be0d0e16909"' }>
                                            <li class="link">
                                                <a href="controllers/RolesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RolesModule-48388bdfe390bfa779c20e072c2eda393ebb142f371de8b1fced0513de9d32e364c0c2fb3e8de3e5302b1d4cf5cca9982a9041bb6a20c8623cb32be0d0e16909"' : 'data-bs-target="#xs-injectables-links-module-RolesModule-48388bdfe390bfa779c20e072c2eda393ebb142f371de8b1fced0513de9d32e364c0c2fb3e8de3e5302b1d4cf5cca9982a9041bb6a20c8623cb32be0d0e16909"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RolesModule-48388bdfe390bfa779c20e072c2eda393ebb142f371de8b1fced0513de9d32e364c0c2fb3e8de3e5302b1d4cf5cca9982a9041bb6a20c8623cb32be0d0e16909"' :
                                        'id="xs-injectables-links-module-RolesModule-48388bdfe390bfa779c20e072c2eda393ebb142f371de8b1fced0513de9d32e364c0c2fb3e8de3e5302b1d4cf5cca9982a9041bb6a20c8623cb32be0d0e16909"' }>
                                        <li class="link">
                                            <a href="injectables/RolesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubscribersModule.html" data-type="entity-link" >SubscribersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SubscribersModule-9676374cfbbafa22a14b6cdbe769bb77498ceedbaae0fd04282e876770c2394424ad09600af554a4f43b4fa9b09f70ceb61361f40e527e7a0b8bf0a4e54f508a"' : 'data-bs-target="#xs-controllers-links-module-SubscribersModule-9676374cfbbafa22a14b6cdbe769bb77498ceedbaae0fd04282e876770c2394424ad09600af554a4f43b4fa9b09f70ceb61361f40e527e7a0b8bf0a4e54f508a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SubscribersModule-9676374cfbbafa22a14b6cdbe769bb77498ceedbaae0fd04282e876770c2394424ad09600af554a4f43b4fa9b09f70ceb61361f40e527e7a0b8bf0a4e54f508a"' :
                                            'id="xs-controllers-links-module-SubscribersModule-9676374cfbbafa22a14b6cdbe769bb77498ceedbaae0fd04282e876770c2394424ad09600af554a4f43b4fa9b09f70ceb61361f40e527e7a0b8bf0a4e54f508a"' }>
                                            <li class="link">
                                                <a href="controllers/SubscribersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscribersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SubscribersModule-9676374cfbbafa22a14b6cdbe769bb77498ceedbaae0fd04282e876770c2394424ad09600af554a4f43b4fa9b09f70ceb61361f40e527e7a0b8bf0a4e54f508a"' : 'data-bs-target="#xs-injectables-links-module-SubscribersModule-9676374cfbbafa22a14b6cdbe769bb77498ceedbaae0fd04282e876770c2394424ad09600af554a4f43b4fa9b09f70ceb61361f40e527e7a0b8bf0a4e54f508a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SubscribersModule-9676374cfbbafa22a14b6cdbe769bb77498ceedbaae0fd04282e876770c2394424ad09600af554a4f43b4fa9b09f70ceb61361f40e527e7a0b8bf0a4e54f508a"' :
                                        'id="xs-injectables-links-module-SubscribersModule-9676374cfbbafa22a14b6cdbe769bb77498ceedbaae0fd04282e876770c2394424ad09600af554a4f43b4fa9b09f70ceb61361f40e527e7a0b8bf0a4e54f508a"' }>
                                        <li class="link">
                                            <a href="injectables/SubscribersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscribersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-84816d10d2c214a0c4fa3ccfac1a44c2a850970dc04392baa54c63de9ce98a3098f15cbc29c7970c43de0229e54fa739d04c1077ca0e60a1812e9fa5bfe6f1c4"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-84816d10d2c214a0c4fa3ccfac1a44c2a850970dc04392baa54c63de9ce98a3098f15cbc29c7970c43de0229e54fa739d04c1077ca0e60a1812e9fa5bfe6f1c4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-84816d10d2c214a0c4fa3ccfac1a44c2a850970dc04392baa54c63de9ce98a3098f15cbc29c7970c43de0229e54fa739d04c1077ca0e60a1812e9fa5bfe6f1c4"' :
                                            'id="xs-controllers-links-module-UsersModule-84816d10d2c214a0c4fa3ccfac1a44c2a850970dc04392baa54c63de9ce98a3098f15cbc29c7970c43de0229e54fa739d04c1077ca0e60a1812e9fa5bfe6f1c4"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-84816d10d2c214a0c4fa3ccfac1a44c2a850970dc04392baa54c63de9ce98a3098f15cbc29c7970c43de0229e54fa739d04c1077ca0e60a1812e9fa5bfe6f1c4"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-84816d10d2c214a0c4fa3ccfac1a44c2a850970dc04392baa54c63de9ce98a3098f15cbc29c7970c43de0229e54fa739d04c1077ca0e60a1812e9fa5bfe6f1c4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-84816d10d2c214a0c4fa3ccfac1a44c2a850970dc04392baa54c63de9ce98a3098f15cbc29c7970c43de0229e54fa739d04c1077ca0e60a1812e9fa5bfe6f1c4"' :
                                        'id="xs-injectables-links-module-UsersModule-84816d10d2c214a0c4fa3ccfac1a44c2a850970dc04392baa54c63de9ce98a3098f15cbc29c7970c43de0229e54fa739d04c1077ca0e60a1812e9fa5bfe6f1c4"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CompaniesController.html" data-type="entity-link" >CompaniesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DatabasesController.html" data-type="entity-link" >DatabasesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FilesController.html" data-type="entity-link" >FilesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HealthController.html" data-type="entity-link" >HealthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/JobsController.html" data-type="entity-link" >JobsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MailController.html" data-type="entity-link" >MailController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PermissionsController.html" data-type="entity-link" >PermissionsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ResumesController.html" data-type="entity-link" >ResumesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RolesController.html" data-type="entity-link" >RolesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SubscribersController.html" data-type="entity-link" >SubscribersController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Company.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/Company-1.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/Company-2.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCompanyDto.html" data-type="entity-link" >CreateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFileDto.html" data-type="entity-link" >CreateFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateJobDto.html" data-type="entity-link" >CreateJobDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePermissionDto.html" data-type="entity-link" >CreatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateResumeDto.html" data-type="entity-link" >CreateResumeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoleDto.html" data-type="entity-link" >CreateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSubscriberDto.html" data-type="entity-link" >CreateSubscriberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserCVDto.html" data-type="entity-link" >CreateUserCVDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/File.html" data-type="entity-link" >File</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/Job.html" data-type="entity-link" >Job</a>
                            </li>
                            <li class="link">
                                <a href="classes/Permission.html" data-type="entity-link" >Permission</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterUserDto.html" data-type="entity-link" >RegisterUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Resume.html" data-type="entity-link" >Resume</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="classes/Subscriber.html" data-type="entity-link" >Subscriber</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCompanyDto.html" data-type="entity-link" >UpdateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFileDto.html" data-type="entity-link" >UpdateFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateJobDto.html" data-type="entity-link" >UpdateJobDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePermissionDto.html" data-type="entity-link" >UpdatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateResumeDto.html" data-type="entity-link" >UpdateResumeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRoleDto.html" data-type="entity-link" >UpdateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSubscriberDto.html" data-type="entity-link" >UpdateSubscriberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLoginDto.html" data-type="entity-link" >UserLoginDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CompaniesService.html" data-type="entity-link" >CompaniesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabasesService.html" data-type="entity-link" >DatabasesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilesService.html" data-type="entity-link" >FilesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JobsService.html" data-type="entity-link" >JobsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MailService.html" data-type="entity-link" >MailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MulterConfigService.html" data-type="entity-link" >MulterConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PermissionsService.html" data-type="entity-link" >PermissionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResumesService.html" data-type="entity-link" >ResumesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RolesService.html" data-type="entity-link" >RolesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubscribersService.html" data-type="entity-link" >SubscribersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransformInterceptor.html" data-type="entity-link" >TransformInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link" >Response</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});