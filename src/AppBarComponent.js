import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import SearchBook from "./SearchBook";

export default function AppBarComponent({ onSearch }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        library

                    </Typography>
                    <SearchBook onSearch={onSearch} />
                </Toolbar>
            </AppBar>
        </Box>
    );
}
