import React from 'react';
import ReactDOM from 'react-dom';

import ExperimentPageTabs from './ExperimentPageTabs.jsx';

export default function ( {atlasHost : hostUrl = window.location.protocol + "//" + window.location.host,
                            tabList, experimentAccession, mountNode}) {

    ReactDOM.render(
        <ExperimentPageTabs atlasHost={hostUrl}
                     tabList={tabList}
                     experimentAccession={experimentAccession}/>
    , mountNode)
};