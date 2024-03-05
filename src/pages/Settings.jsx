import SettingsForm from "../features/settings/SettingsForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

export default function Settings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Hotel Settings</Heading>
      </Row>
      <Row>
        <SettingsForm />
      </Row>
    </>
  );
}
