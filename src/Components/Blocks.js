import React, { 
    Component,
    PropTypes
} from 'react';

class Block extends Component {
    static propTypes = {
        block: PropTypes.object,
        order: PropTypes.number
    };

    constructor() {
        super();

        this.state = {
            content: '',
            order: null
        };
    }

    componentDidMount() {
        this.setState({
            order: this.props.order
        })
    }

    handleChange(event) {
        this.setState({
            content: event.target.value
        })
    }

    render() {
        const {block} = this.props;

        return (
            <div>
                {(() => {
                    if (block.type === 'image') {
                        return (
                            <input type="text" onChange={(event) => this.handleChange(event)} placeholder="Image URL" value={this.state.content} />
                        );
                    }
                    if (block.type === 'text') {
                        return (
                            <textarea onChange={(event) => this.handleChange(event)} value={this.state.content} placeholder="Write some content here"></textarea>
                        );
                    } 
                    if (block.type === 'video') {
                        return (
                            <input onChange={(event) => this.handleChange(event)} value={this.state.content} type="text" placeholder="Youtube URL" />
                        );
                    }
                    if (block.type === 'stream') {
                        return (
                            <input onChange={(event) => this.handleChange(event)} value={this.state.content} type="text" placeholder="Twitch URL" />
                        );
                    } else {
                        return (
                            <h2>Rofl copter</h2>
                        );
                    }
                })()}
            </div>
        );
    }
}

export default Block;
