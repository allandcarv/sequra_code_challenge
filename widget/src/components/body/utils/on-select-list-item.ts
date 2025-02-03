import { postEvent } from '../../../services/api/post-event';
import { EVENT_TYPES } from '../shared/constants';
import { updateDropdownButton } from './update-dropdown-button';
import { updateDropdownList } from './update-dropdown-list';

export function onSelectListItem(value: number, string: string) {
  postEvent(EVENT_TYPES.SimulatorInstalmentChanged, value);

  const stringifiedValue = value.toString();

  const { prevSelectedString, prevSelectedValue } = updateDropdownButton(
    stringifiedValue,
    string
  );

  if (prevSelectedString && prevSelectedValue) {
    updateDropdownList(value, prevSelectedValue, prevSelectedString);
  }
}
