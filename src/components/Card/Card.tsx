import { Checkbox } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

type Props = {
  name: string;
  checked: boolean;
};

export default function BasicCard({ name, checked }: Props) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div" noWrap>
          {name}
        </Typography>
        <Typography variant="subtitle1">
          Done ? <Checkbox checked={checked} />
        </Typography>
      </CardContent>
    </Card>
  );
}
