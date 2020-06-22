import React from "react";
import { Grid, Cell } from 'react-mdl';

class FetchApi extends React.Component {
  state = {
    loading: true,
    gist: [],
  };
  

  async componentDidMount() {
    const url = "https://api.github.com/gists/public";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ gist: data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.gist.length) {
      return <div>didn't get no gist</div>;
    }

    return (
      <div style={{width:'80%', margin: 'auto'}}>
        {this.state.gist.map(single=> (
          <div key={single.url}>
            <Grid>
              <Cell className = 'left-col' col = {4}>
                <div style = {{textAlign: 'center'}}>                
                  {/* Avatar Pic */}
                  <div>
                    <img
                      src={single.owner.avatar_url} 
                      alt = "avatar"
                      className = "avatar-img"
                    />
                  </div>
                  {/* User */}
                  <div>User: {single.owner.login}</div>                 
                  {/* GitHub Profile */}
                  <div>
                    <a href = {single.owner.html_url} rel="noopener noreferrer" target="_blank">GitHub Profile</a>
                  </div>
                </div>
              </Cell>

              <Cell className = 'right-col' col={8}>
                <div style = {{textAlign: 'left'}}>
                  <h5 style = {{marginTop:'0px'}}>
                    <a href = {single.html_url} rel="noopener noreferrer" target="_blank">
                      Gist{single.description && <h7>: {single.description}</h7>}
                    </a>
                  </h5>

                  <div>Created: {single.created_at}</div>
                  <div>Updated: {single.updated_at}</div>
                  
                </div>
                
              </Cell>
            </Grid>
          </div>
        ))}
      </div>           
    );
  }
}

export default FetchApi

