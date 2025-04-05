import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fallBackData } from "../utils/dummyData.ts";

const API_URL = 'https://unified-api-uf96.onrender.com/api/v1/portfolio/content';

// Button Labels
interface ButtonLabels {
    resumeBtn: string;
    contactBtn: string;
    backBtn: string;
    submitBtn: string;
  }
  
  // Navigation Links
  interface NavigationItem {
    name: string;
    url: string;
  }
  
  // Home Section
  interface HomeSection {
    title: string;
    miniTitle: string;
    roles: string[];
  }
  
  // About Section
  interface AboutSection {
    title: string;
    description: string;
  }
  
  // Single Project
  interface Project {
    name: string;
    description: string;
    url: string;
  }
  
  // Projects Section
  interface ProjectsSection {
    title: string;
    projects: Project[];
  }
  
  // Single Certificate
  interface Certificate {
    name: string;
    url: string;
    alt: string;
  }
  
  // Certificates Section
  interface CertificatesSection {
    title: string;
    certificates: Certificate[];
  }
  
  // Contact Section
  interface ContactSection {
    title: string;
    description: string;
    mailDescription: string;
    namelabel: string;
    emaillabel: string;
    messagelabel: string;
  }
  
  // Main Data Structure
  export interface PortfolioContent {
    title: string;
    navigation: NavigationItem[];
    home: HomeSection;
    about: AboutSection;
    projects: ProjectsSection;
    certifcates: CertificatesSection;
    Contact: ContactSection;
    buttons: ButtonLabels;
  }
  
  // Full API Response
  export interface PortfolioApiResponse {
    status: string;
    data: PortfolioContent;
  }
  

interface DataState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchData = createAsyncThunk<PortfolioContent>('data/fetchData', async () => {
  const res = await fetch(API_URL);
  const json: PortfolioApiResponse= await res.json();
  return json.data;
});

const contentDataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    // Optional: manual setters if needed
    setData(state, action: PayloadAction<any>) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.data = fallBackData;
        state.error = action.error.message || 'Failed to fetch data';
      });
  },
});

export const { setData } = contentDataSlice.actions;
export default contentDataSlice.reducer;
