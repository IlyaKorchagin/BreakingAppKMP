package org.gradle.accessors.dm;

import org.gradle.api.NonNullApi;
import org.gradle.api.artifacts.ProjectDependency;
import org.gradle.api.internal.artifacts.dependencies.ProjectDependencyInternal;
import org.gradle.api.internal.artifacts.DefaultProjectDependencyFactory;
import org.gradle.api.internal.artifacts.dsl.dependencies.ProjectFinder;
import org.gradle.api.internal.catalog.DelegatingProjectDependency;
import org.gradle.api.internal.catalog.TypeSafeProjectDependencyFactory;
import javax.inject.Inject;

@NonNullApi
public class ModuleMainProjectDependency extends DelegatingProjectDependency {

    @Inject
    public ModuleMainProjectDependency(TypeSafeProjectDependencyFactory factory, ProjectDependencyInternal delegate) {
        super(factory, delegate);
    }

    /**
     * Creates a project dependency on the project at path ":module_main:data_main"
     */
    public ModuleMain_DataMainProjectDependency getDataMain() { return new ModuleMain_DataMainProjectDependency(getFactory(), create(":module_main:data_main")); }

    /**
     * Creates a project dependency on the project at path ":module_main:di_main"
     */
    public ModuleMain_DiMainProjectDependency getDiMain() { return new ModuleMain_DiMainProjectDependency(getFactory(), create(":module_main:di_main")); }

    /**
     * Creates a project dependency on the project at path ":module_main:domain_main"
     */
    public ModuleMain_DomainMainProjectDependency getDomainMain() { return new ModuleMain_DomainMainProjectDependency(getFactory(), create(":module_main:domain_main")); }

    /**
     * Creates a project dependency on the project at path ":module_main:presentation_main"
     */
    public ModuleMain_PresentationMainProjectDependency getPresentationMain() { return new ModuleMain_PresentationMainProjectDependency(getFactory(), create(":module_main:presentation_main")); }

}
