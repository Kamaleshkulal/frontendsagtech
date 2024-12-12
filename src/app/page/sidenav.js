import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import PaymentIcon from '@mui/icons-material/Payment';
import WorkIcon from '@mui/icons-material/Work';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';
import { CssBaseline } from '@mui/material';
import Image from 'next/image';

// Define navigation items
const NAVIGATION = [
    {
        kind: 'header',
        title: 'Dashboard',
    },
    {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: <DashboardIcon />,
    },

    {
        kind: 'header',
        title: 'Personal',
    },
    {
        segment: 'profile',
        title: 'Profile',
        icon: <PersonIcon />,
    },

    {
        kind: 'header',
        title: 'Payment',
    },
    {
        segment: 'payment',
        title: 'Payment',
        icon: <PaymentIcon />,
        children: [
            {
                segment: 'transactions',
                title: 'Transactions',
                icon: <AccountCircleIcon />,
                children: [
                    {
                        segment: 'due-payments',
                        title: 'Due Payments',
                        icon: <DescriptionIcon />,
                    },
                    {
                        segment: 'reminders',
                        title: 'Reminders',
                        icon: <DescriptionIcon />,
                    },
                    {
                        segment: 'completed-payments',
                        title: 'Completed Payments',
                        icon: <DescriptionIcon />,
                    },
                ],
            },
        ],
    },

    {
        kind: 'header',
        title: 'Projects',
    },
    {
        segment: 'projects',
        title: 'My Projects',
        icon: <WorkIcon />,
    },

    {
        kind: 'header',
        title: 'Documents',
    },
    {
        segment: 'documents',
        title: 'My Documents',
        icon: <DescriptionIcon />,
    },
];

// Define the theme
const demoTheme = extendTheme({
    colorSchemeSelector: 'class',
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});

// Router hook
function useDemoRouter(initialPath) {
    const [pathname, setPathname] = React.useState(initialPath);

    const router = React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => setPathname(String(path)),
        };
    }, [pathname]);

    return router;
}

// Skeleton component for loading states
const Skeleton = styled('div')(({ theme, height }) => ({
    backgroundColor: theme.palette.action.hover,
    borderRadius: theme.shape.borderRadius,
    height,
    content: '" "',
}));

// Main layout component
export default function DashboardLayoutModified(props) {
    const { window } = props;

    const router = useDemoRouter('/');

    const [isClient, setIsClient] = React.useState(false);

    React.useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // Avoid rendering until after hydration
    }

    const demoWindow = typeof window !== 'undefined' ? window : undefined;

    return (
        <AppProvider
            navigation={NAVIGATION}
            router={router}
            theme={demoTheme}
            window={demoWindow}
            branding={{
                logo: <Image
                    src="https://saggroup.s3.us-east-1.amazonaws.com/apple-touch-icon.png"
                    width={30}
                    height={30}
                    className="items-center jus"
                    alt="SAG logo" style={{ width: '30px', height: 'auto' }} />, // Reduce the width of the image
                title: <div className="text-logo text-3xl text-black">SagTech. </div>, // Apply custom class to title
            }}
        >
            {/* Global CSS to hide the Toolpad branding */}


            <DashboardLayout>
                <PageContainer>
                    {/* Main layout for dashboard content */}
                    <Grid container spacing={1}>
                        <Grid xs={12} sm={5}>
                            <Skeleton height={14} />
                        </Grid>
                        <Grid xs={12} sm={7}>
                            <Skeleton height={14} />
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <Skeleton height={100} />
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <Skeleton height={100} />
                        </Grid>

                        <Grid xs={12}>
                            <Skeleton height={150} />
                        </Grid>
                        <Grid xs={12}>
                            <Skeleton height={14} />
                        </Grid>

                        <Grid xs={6} sm={3}>
                            <Skeleton height={100} />
                        </Grid>
                        <Grid xs={6} sm={3}>
                            <Skeleton height={100} />
                        </Grid>
                        <Grid xs={6} sm={3}>
                            <Skeleton height={100} />
                        </Grid>
                        <Grid xs={6} sm={3}>
                            <Skeleton height={100} />
                        </Grid>
                    </Grid>
                </PageContainer>
            </DashboardLayout>
        </AppProvider>
    );
}
