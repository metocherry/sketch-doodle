import { classify } from "@angular-devkit/core/src/utils/strings";

export class <%= classify(name) %> {
<% props.forEach(function (props) { %>
  <%= prop[0] %>: <%- prop[1] %>;
<% }); %>
}
