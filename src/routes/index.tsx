// TODO: lazy load pages components
import {
  Event_details,
  ProductPage,
  ServiceDetailPage,
  ServicePage,
  SocialDetailPage,
  SocialPage
} from '@/pages';
import { path } from './path';
import { createBrowserRouter } from 'react-router-dom';
import EventPage from '@/pages/event/Event';
import { DashboardLayout } from '@/components';
import { GossipPage } from '@/pages/gossip';
import { VendorServicePage, VendorServiceForm } from '@/pages/vendor/services';
import Donations from '@/pages/donations/Donations';
import DonationDetails from '@/pages/donations/DonationDetails';
import VendorEvents from '@/pages/vendor/event/Events';
import Dashboard from '@/pages/vendor/dashboard/Dashboard';
import VendorDonationPage from '@/pages/vendor/dashboard/donation/Donation';
import DonationUserManagement from '@/pages/UserManagement/Donation';
import PointUserManagement from '@/pages/UserManagement/Point';
import BookingUserManagement from '@/pages/UserManagement/Booking';
import TicketUserManagement from '@/pages/UserManagement/Ticket';
import RewardUserManagement from '@/pages/UserManagement/Reward/Reward';
import NigerianDomiciallyAccount from '@/pages/UserManagement/Reward/DepositeToBank/NigerianDomiciallyAccount';
import NigeriaLocalGov from '@/pages/UserManagement/Reward/DepositeToBank/NigeriaLocalGov';
import USAccount from '@/pages/UserManagement/Reward/DepositeToBank/USAccount';
import SharePoints from '@/pages/UserManagement/Reward/SharePoint/SharePoint';
import BuyMorePoints from '@/pages/UserManagement/Reward/BuyMorePoint/BuyMorePoints';
import VendorDonations from '@/pages/vendor/Donation/Donation';
import VendorDonationDetails from '@/pages/vendor/Donation/DonationDetails';
import CreateVendorDonation from '@/pages/vendor/Donation/CreateDonation';
import VendorSaveItemEvent from '@/pages/vendor/SaveItem.tsx/Event';
import VendorSaveItemBooking from '@/pages/vendor/SaveItem.tsx/Booking';
import VendorSaveItemDonation from '@/pages/vendor/SaveItem.tsx/Donation';
import VendorSaveItemPost from '@/pages/vendor/SaveItem.tsx/Post';
import WithdrawalNigeriaLocalBank from '@/pages/vendor/Withdrawal/NigerianLocalBank';
import WithdrawalNigerianDomiciallyAccount from '@/pages/vendor/Withdrawal/NigerianDomiciallyAccount';
import WithdrawalUSAccount from '@/pages/vendor/Withdrawal/USAccount';
import VendorAccountEditProfile from '@/pages/vendor/AccountSettings/EditProfile';
import VendorAccountChangePassword from '@/pages/vendor/AccountSettings/ChangePassword';
import VendorAccountNotification from '@/pages/vendor/AccountSettings/Notification';
import VendorAccountSubscription from '@/pages/vendor/AccountSettings/Subscription';
export const router = createBrowserRouter([
  {
    path: path.HOME,
    element: <Dashboard />
  },
  {
    path: path.CHAT,
    element: <div>Chat page goes here</div>
  },
  {
    path: path.DONATIONS,
    element: <Donations />
  },
  {
    path: path.DONATION_DETAILS,
    element: <DonationDetails />
  },
  {
    path: path.SHOP,
    element: <div>Shop page goes here</div>
  },
  {
    path: path.PRODUCT,
    element: <ProductPage />
  },
  {
    path: path.SERVICES,
    element: <ServicePage />
  },
  {
    path: path.SERVICES_DETAIL,
    element: <ServiceDetailPage />
  },
  {
    path: path.EVENTS,
    element: <EventPage />
  },
  {
    path: path.EVENTS_DETAILS,
    element: <Event_details />
  },
  {
    path: path.SOCIAL,
    element: <DashboardLayout />,
    children: [
      {
        path: path.SOCIAL,
        element: <SocialPage />
      },
      {
        path: path.SOCIAL_DETAIL,
        element: <SocialDetailPage />
      }
    ]
  },
  {
    path: path.GOSSIP,
    element: <DashboardLayout />,
    children: [
      {
        path: path.GOSSIP,
        element: <GossipPage />
      }
    ]
  },
  {
    path: path.VENDOR_SERVICES,
    element: <VendorServicePage />
  },
  {
    path: path.VENDOR_SERVICE_CREATE,
    element: <VendorServiceForm />
  },
  {
    path: path.VENDOR_EVENTS,
    element: <VendorEvents />
  },
  // {
  //   path: path.VENDOR_DONATION,
  //   element: <VendorDonationPage />
  // },
  {
    path: path.DONATION_USER_MANAGEMENT,
    element: <DonationUserManagement />,
  },
  {
    path: path.POINT_USER_MANAGEMENT,
    element: <PointUserManagement />,
  },
 {
  path:path.BOOKINGS_USER_MANAGEMENT,
  element:<BookingUserManagement/>
 },
 {
  path:path.REWARD_USER_MANAGEMENT,
  element:<RewardUserManagement/>
 },
 {
  path:path.TICKET_USER_MANAGEMENT,
  element:<TicketUserManagement/>
 },
 {
  path:path.NIGERIA_DOMICIALLY_ACCOUNT,
  element:<NigerianDomiciallyAccount/>
 },
 {
  path:path.NIGERIA_LOCAL_GOVERNMENT,
  element:<NigeriaLocalGov/>
 },
 {
  path:path.US_ACCOUNT,
  element:<USAccount/>
 },
 {
  path:path.SHARE_POINTS,
  element:<SharePoints/>
 },
 {
  path:path.BUY_MORE_POINTS,
  element:<BuyMorePoints/>
 },
 {
  path:path.VENDOR_DONATION,
  element:<VendorDonations/>
 },
 {
  path:path.VENDOR_DONATION_DETAILS,
  element:<VendorDonationDetails/>
 },
 {
  path:path.VENDOR_CREATE_DONATION,
  element:<CreateVendorDonation/>
 },
 {
  path:path.VENDOR_SAVED_ITEM_EVENT,
  element:<VendorSaveItemEvent/>
 },
 {
  path:path.VENDOR_SAVED_ITEM_BOOKING,
  element:<VendorSaveItemBooking/>
 },
 {
  path:path.VENDOR_SAVED_ITEM_DONATION,
  element:<VendorSaveItemDonation/>
 },
 {
 path:path.VENDOR_SAVED_ITEM_POST,
 element:<VendorSaveItemPost/>
 },
 {
  path:path.VENDOR_WITHDRAWL_NIGERIA_LOCAL_BANK,
  element:<WithdrawalNigeriaLocalBank/>
 },
 {
  path:path.VENDOR_WITHDRAWL_NIGERIA_DOMICALLY_ACCOUNT,
  element:<WithdrawalNigerianDomiciallyAccount/>
 },
 {
  path:path.VENDOR_WITHDRAWL_US_ACCOUNT,
  element:<WithdrawalUSAccount/>
 },
 {
  path:path.VENDOR_ACCOUNT_SETTINGS_EDIT_PROFILE,
  element:<VendorAccountEditProfile/>
 },
 {
  path:path.VENDOR_ACCOUNT_SETTINGS_CHANEGE_PASSWORD,
  element:<VendorAccountChangePassword/>
 },
 {
  path:path.VENDOR_ACCOUNT_SETTINGS_NOTIFICATION,
  element:<VendorAccountNotification/>
 },
 {
  path:path.VENDOR_ACCOUNT_SETTINGS_SUBSCRIPTION,
  element:<VendorAccountSubscription/>
 }
]);

