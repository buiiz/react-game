import { ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Switch } from "@material-ui/core";

interface OptionListItemProps {
  children: string;
  icon?: React.ReactNode;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

const OptionListItem = ({ children, icon, checked, onChange }: OptionListItemProps) => {
  return (
    <ListItem>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={children} />
      <ListItemSecondaryAction>
        <Switch
          color="primary"
          edge="end"
          onChange={onChange}
          checked={checked}
        />
      </ListItemSecondaryAction >
    </ListItem >
  )
}

export default OptionListItem