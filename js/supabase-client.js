import { getSupabase } from './supabase-config.js';

// ==========================================
// AUTENTICACIÓN
// ==========================================

export async function loginWithSupabase(email, password) {
    const supabase = await getSupabase();
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;

    // Obtener el perfil
    let { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', data.user.id)
        .single();

    // Si no existe el perfil (PGRST116), crearlo on-the-fly
    if (profileError && profileError.code === 'PGRST116') {
        const newProfile = {
            id: data.user.id,
            name: email.split('@')[0],
            role: 'Usuario Creado',
            system_role: 'dev',
            avatar: `https://i.pravatar.cc/150?u=${encodeURIComponent(email)}`,
            email: email
        };
        const { data: insertedData, error: insertErr } = await supabase
            .from('profiles')
            .insert([newProfile])
            .select('*')
            .single();

        if (insertErr) throw insertErr;
        profile = insertedData;
    } else if (profileError) {
        throw profileError;
    }

    return { user: data.user, profile };
}

export async function logoutFromSupabase() {
    const supabase = await getSupabase();
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
}

export async function getCurrentSession() {
    const supabase = await getSupabase();
    const { data, error } = await supabase.auth.getSession();
    if (error) throw error;
    if (!data.session) return null;

    const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', data.session.user.id)
        .single();

    return { session: data.session, user: data.session.user, profile };
}

export async function updateProfileAndAuth(updates, newPassword) {
    const supabase = await getSupabase();
    if (updates && Object.keys(updates).length > 0) {
        const { data, error: profileError } = await supabase
            .from('profiles')
            .update(updates)
            .eq('id', updates.id)
            .select();
        if (profileError) throw profileError;
        return data ? data[0] : true;
    }
    if (newPassword) {
        const { error: authError } = await supabase.auth.updateUser({ password: newPassword });
        if (authError) throw authError;
    }
    return true;
}

export async function uploadAvatar(file, userId) {
    const supabase = await getSupabase();
    if (!file) return null;
    const fileExt = file.name.split('.').pop();
    const fileName = `${userId}-${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file, { upsert: true });

    if (uploadError) throw uploadError;

    const { data: publicUrlData } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);

    return publicUrlData.publicUrl;
}


// ==========================================
// PROYECTOS
// ==========================================

export async function getProjects() {
    const supabase = await getSupabase();
    const { data, error } = await supabase.from('projects').select('*').order('start_date', { ascending: false });
    if (error) throw error;
    return data.map(p => ({
        id: p.id, name: p.name, client: p.client, manager: p.manager,
        status: p.status, start: p.start_date, end: p.end_date,
        progress: p.progress, teamMembers: p.team_members || [],
        logs: p.logs || []
    }));
}

export async function saveProject(projectObj) {
    const supabase = await getSupabase();
    const dbObj = {
        id: projectObj.id, name: projectObj.name, client: projectObj.client, manager: projectObj.manager,
        status: projectObj.status, start_date: projectObj.start || null, end_date: projectObj.end || null,
        progress: projectObj.progress || 0, team_members: projectObj.teamMembers || [],
        logs: projectObj.logs || []
    };
    const { data, error } = await supabase.from('projects').upsert([dbObj]).select();
    if (error) throw error;
    return data[0];
}

export async function deleteProject(projectId) {
    const supabase = await getSupabase();
    const { error } = await supabase.from('projects').delete().eq('id', projectId);
    if (error) throw error;
    return true;
}

// ==========================================
// TAREAS
// ==========================================

export async function getTasks() {
    const supabase = await getSupabase();
    const { data, error } = await supabase.from('tasks').select('*').order('due_date', { ascending: true });
    if (error) throw error;
    return data.map(t => ({
        id: t.id, title: t.title, project: t.project_id, priority: t.priority,
        assignedTo: t.assigned_to, status: t.status, completed: t.completed,
        due: t.due_date, created_at: t.created_at
    }));
}

export async function saveTask(taskObj) {
    const supabase = await getSupabase();
    const dbObj = {
        title: taskObj.title, project_id: taskObj.project, priority: taskObj.priority,
        assigned_to: taskObj.assignedTo, status: taskObj.status, completed: taskObj.completed,
        due_date: taskObj.due
    };
    if (taskObj.id && Number.isInteger(taskObj.id)) {
        dbObj.id = taskObj.id;
    }
    const { data, error } = await supabase.from('tasks').upsert([dbObj]).select();
    if (error) throw error;
    return data[0];
}

export async function updateTaskStatus(taskId, status, isCompleted) {
    const supabase = await getSupabase();
    const { error } = await supabase.from('tasks').update({ status, completed: isCompleted }).eq('id', taskId);
    if (error) throw error;
    return true;
}

export async function deleteTask(taskId) {
    const supabase = await getSupabase();
    const { error } = await supabase.from('tasks').delete().eq('id', taskId);
    if (error) throw error;
    return true;
}

// ==========================================
// EQUIPO
// ==========================================

export async function getTeamSize() {
    const supabase = await getSupabase();
    const { count, error } = await supabase.from('profiles').select('*', { count: 'exact', head: true });
    if (error) throw error;
    return count || 0;
}

export async function getTeamMembers() {
    const supabase = await getSupabase();
    const { data, error } = await supabase.from('profiles').select('*').order('name');
    if (error) throw error;
    return data;
}

export async function saveTeamMember(memberObj) {
    const supabase = await getSupabase();
    const dbObj = {
        name: memberObj.name,
        role: memberObj.role,
        skills: memberObj.skills || [],
        system_role: memberObj.systemRole || 'dev',
        avatar: memberObj.avatar
    };
    if (memberObj.email) dbObj.email = memberObj.email;

    const { error } = await supabase
        .from('profiles')
        .update(dbObj)
        .eq('id', memberObj.id);

    if (error) throw error;
    return true;
}

export async function createTeamMember(memberObj) {
    const supabase = await getSupabase();
    const dbObj = {
        id: memberObj.id,
        name: memberObj.name,
        role: memberObj.role,
        skills: memberObj.skills || [],
        system_role: memberObj.systemRole || 'dev',
        avatar: memberObj.avatar,
        email: memberObj.email
    };

    const { error } = await supabase
        .from('profiles')
        .insert([dbObj]);

    if (error) throw error;
    return true;
}

export async function deleteTeamMember(id) {
    const supabase = await getSupabase();
    const { error } = await supabase.from('profiles').delete().eq('id', id);
    if (error) throw error;
    return true;
}

// ==========================================
// PROGRESO CURSOS
// ==========================================

export async function getCourseProgress(userId, courseId) {
    const supabase = await getSupabase();
    const { data, error } = await supabase
        .from('course_progress')
        .select('*')
        .eq('user_id', userId)
        .eq('course_id', courseId)
        .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data;
}

export async function saveCourseProgress(userId, courseId, watchedVideosArr, totalVideos) {
    const supabase = await getSupabase();

    // Tratamos de obtener si ya existe para asegurar compatibilidad de UUID o ID normal
    const dbObj = {
        user_id: userId,
        course_id: courseId,
        watched_videos: watchedVideosArr,
        total_videos: totalVideos,
        updated_at: new Date().toISOString()
    };

    const { error } = await supabase
        .from('course_progress')
        .upsert(dbObj, { onConflict: 'user_id,course_id' });

    if (error) {
        console.error("Error saving course progress:", error);
        throw error;
    }
    return true;
}

export async function deleteObsoleteCourseProgress() {
    const supabase = await getSupabase();
    const VALID_IDS = ['java_basico', 'apigee', 'springboot'];
    const { error } = await supabase
        .from('course_progress')
        .delete()
        .not('course_id', 'in', `(${VALID_IDS.join(',')})`);
    if (error) console.warn('Limpieza course_progress:', error);
}

export async function getAllProgressForAdmin() {
    const supabase = await getSupabase();
    const { data, error } = await supabase
        .from('course_progress')
        .select('*, profiles(name, email)');
    if (error) throw error;
    return data;
}
