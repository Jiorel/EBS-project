import { Switch, Route } from "react-router-dom";
import "./Content.scss";

export function Content() {
  return (
    <div className="content">
      <Switch>
        {/* <Route path="/dashboard" component={Dashboard} />
        <Route path="/posts/create" component={CreatePost} />
        <Route path="/posts/:id/edit" component={EditPost} />
        <Route path="/posts" component={Posts} />
        <Route path="/users" component={Users} /> */}
      </Switch>
    </div>
  );
}
