import React from 'react';

class ExperimentPageTabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tabList: props.tabList,
            currentTab: 0
        };
        this.changeTab = this.changeTab.bind(this);
    }

    changeTab(index) {
        this.setState({currentTab: index});
    }

   render() {

        return (
            <div>
                <Tabs
                    currentTab={this.state.currentTab}
                    tabList={this.state.tabList}
                    changeTab={this.changeTab}
                    experimentAccession={this.props.experimentAccession}
                />
                <Content currentTab={this.state.currentTab}
                    experimentAccession={this.props.experimentAccession}/>
            </div>
        );
    }

}

class Tabs extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick(tab) {
        this.props.changeTab(tab);
    }

    render() {

        return (
            <ul className="tabs" data-tabs role="tablist" id="experiment-page-tabs">
                {this.props.tabList.map(function(tab, index) {
                    return (
                        <Tab
                            handleClick={this.handleClick.bind(this, index)}
                            key={tab.id}
                            url={tab.url}
                            name={tab.name}
                            experimentAccession={this.props.experimentAccession}
                            isCurrent={(this.props.currentTab === index)}
                        />
                    );
                }.bind(this))}
            </ul>
        );
    }

}

class Tab extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.handleClick();
    }

    render() {

        const url = "/gxa/experiments/" + this.props.experimentAccession + this.props.url;

        const activeStyle = this.props.isCurrent ? "tabs-title is-active active" : "tabs-title";

        return (
            <li className={activeStyle} role="presentation">
                <a onClick={this.handleClick} role="tab" href={url} aria-selected={this.props.isCurrent}>
                    {this.props.name}
                </a>
            </li>
        );
    }
}

class Content extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {


        return(
            <div className="tabs-content" data-tabs-content="experiment-page-tabs">
                {this.props.currentTab === 0 ?
                    <div className="tabs-panel is-active" role="tabpanel" aria-hidden="false" id="experiment-design">
                        Experiment design content here

                    </div>
                    :null}

                {this.props.currentTab === 1 ?
                    <div className="tabs-panel" role="tabpanel" aria-hidden="false" id="analysis-methods">
                        Analysis methods content here
                    </div>
                    :null}

                {this.props.currentTab === 2 ?
                    <div className="tabs-panel" role="tabpanel" aria-hidden="false" id="qc">
                        QC content here
                    </div>
                    :null}

                {this.props.currentTab === 3 ?
                    <div className="tabs-panel" role="tabpanel" aria-hidden="false" id="downloads">
                        Downloads content here
                    </div>
                    :null}
            </div>
        );
    }
}

export default ExperimentPageTabs;