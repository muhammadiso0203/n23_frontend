import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface TaskList {
  title: string;
  id?: number;
  description: string;
}

export const taskApi = createApi({
  reducerPath: "taskApi",
  tagTypes: ["task_list"],

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3600",
  }),
  endpoints: (build) => ({
    getTasksList: build.query<TaskList[], string>({
      query: (name) => ({
        url: name,
      }),
      providesTags: ["task_list"],
    }),

    getTaskDetail: build.query<TaskList, string>({
      query: (id) => `/user/${id}`,
    }),

    deleteTask: build.mutation({
      query: (id) => ({
        url: `/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["task_list"],
    }),

    createTask: build.mutation({
      query: (data: TaskList) => ({
        url: "/user",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["task_list"],
    }),
    
    updateTask: build.mutation({
      query: ({id, ...data}) => ({
        url: `post/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetTasksListQuery,
  useGetTaskDetailQuery,
  useDeleteTaskMutation,
  useCreateTaskMutation,
  useUpdateTaskMutation,
} = taskApi;
