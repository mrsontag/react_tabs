import React from 'react';

const Tabs = props => {
    
    const onClickHandler = (e, item, i) => {
        props.setContent(item[1]);
        props.setActiveTab(i);
        if (typeof(item[2])=== "function") {
            item[2]();
        }
    }

    return props.tabs.map( (item, i) => { 
            return <div className={ i === props.activetab ? "tab activetab" : "tab"} onClick={ (e) => onClickHandler(e, item,i) }>{item[0]}</div>
        }
    );
}

export default Tabs;