import React from 'react';
import {CarryOutOutlined, HeartOutlined, CustomerServiceOutlined, CoffeeOutlined} from '@ant-design/icons'

import './Options.scss';
import FeatureBox from "../feature-box/FeatureBox";

const Options = () => {
    return (
        <div className="options-section">
            <FeatureBox title="Book Now" icon={<CarryOutOutlined />} />
            <FeatureBox title="Second one" icon={<HeartOutlined />} />
            <FeatureBox title="Third one" icon={<CustomerServiceOutlined />} />
            <FeatureBox title="Fourth one" icon={<CoffeeOutlined />} />

        </div>
    );
}

export default Options;