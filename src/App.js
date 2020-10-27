import React from "react";
import { connect } from "react-redux";

import { IntlProvider } from "react-intl";
import AppLocale from "./lang";
import ColorSwitcher from "./components/common/ColorSwitcher";
import { NotificationContainer } from "./components/common/react-notifications";
import { isMultiColorActive, adminRoot } from "./constants/defaultValues";
import { getDirection } from "./helpers/Utils";

import Main from "./myComponents/Main";

class App extends React.Component {
  constructor(props) {
    super(props);
    const direction = getDirection();
    if (direction.isRtl) {
      document.body.classList.add("rtl");
      document.body.classList.remove("ltr");
    } else {
      document.body.classList.add("ltr");
      document.body.classList.remove("rtl");
    }
  }

  render() {
    const { locale } = this.props;
    const currentAppLocale = AppLocale[locale];

    return (
      <div className="h-100">
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <>
            <NotificationContainer />
            {isMultiColorActive && <ColorSwitcher />}
            {/* Just rendering main component here because App component is a class-based component and functional components are easy to work with. */}
            <Main />
          </>
        </IntlProvider>
      </div>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const { locale } = settings;
  return { locale };
};
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(App);
